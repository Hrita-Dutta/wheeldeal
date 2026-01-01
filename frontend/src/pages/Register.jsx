import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [accountType, setAccountType] = useState("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        ...formData,
        accountType,
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    // 🔒 FIX 1: lock overall height
    <div className="h-screen flex overflow-hidden">
      {/* ================= LEFT SECTION ================= */}
      {/* 🔒 FIX 2: force left section to full height */}
      <div className="hidden lg:flex lg:w-1/2 h-full from-blue-900 via-blue-800 to-blue-900 bg-[#1E3A5F] text-white p-12 flex-col justify-between relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">
            Wheel<span className="text-orange-500">Deal</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative  space-y-8 mb-28">
          {/* Key Placeholder */}
          <div className="flex items-center justify-center mb-6">
            <div className="border-4 rounded-2xl p-16 bg-blue-900 bg-opacity-30">
              <div className="w-48 h-32 flex items-center justify-center text-blue-400 text-sm">
                Car Image will be kept here in the future
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">
              List Your Vehicle & Earn
            </h2>
            <p className="text-blue-200 text-lg">
              Join 200+ vehicle owners earning with WheelDeal
            </p>
          </div>

          {/* Features */}
          <div className="flex items-center justify-center gap-6">
            {/* Verified */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-700 p-3 rounded-lg mb-2">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm text-blue-200">Verified</span>
            </div>

            {/* Secure */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-700 p-3 rounded-lg mb-2">
                <svg
                  className="w-6 h-6 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm text-blue-200">Secure</span>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-700 p-3 rounded-lg mb-2">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-sm text-blue-200">4.5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SECTION ================= */}
      {/* 🔒 FIX 3: allow scrolling instead of resizing */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50 overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Create Account
            </h2>
            <p className="text-gray-600">
              Select your account type and fill in details
            </p>
          </div>

          <div className="space-y-5">
            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I want to:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setAccountType("customer")}
                  className={`py-3 rounded-lg border font-medium ${
                    accountType === "customer"
                      ? "border-orange-500 bg-orange-100"
                      : "border-gray-300"
                  }`}
                >
                  Rent Vehicles
                </button>

                <button
                  type="button"
                  onClick={() => setAccountType("owner")}
                  className={`py-3 rounded-lg border font-medium ${
                    accountType === "owner"
                      ? "border-orange-500 bg-orange-100"
                      : "border-gray-300"
                  }`}
                >
                  List My Vehicle
                </button>
              </div>
            </div>

            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />

            {accountType === "owner" && (
              <div className="p-4 bg-orange-50 border border-orange-300 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="licenseNumber"
                    placeholder="License Number"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                  <input
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              I agree to Terms & Privacy Policy
            </label>

            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <span className="text-orange-500 font-semibold cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
