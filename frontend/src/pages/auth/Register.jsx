import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    accountType: Yup.string().required("Select account type"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    password: Yup.string()
      .min(8, "Minimum 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
    agreeTerms: Yup.boolean().oneOf(
      [true],
      "You must accept Terms & Privacy Policy"
    ),
    licenseNumber: Yup.string().when("accountType", {
      is: "owner",
      then: (schema) => schema.required("License number required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    address: Yup.string().when("accountType", {
      is: "owner",
      then: (schema) => schema.required("Address required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  return (
    <div className="h-screen flex overflow-hidden">
      {/* LEFT SECTION */}
      <div className="hidden lg:flex lg:w-1/2 h-full from-blue-900 via-blue-800 to-blue-900 bg-[#1E3A5F] text-white p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">
            Wheel<span className="text-orange-500">Deal</span>
          </h1>
        </div>
        <div className="relative space-y-8 mb-28">
          <div className="flex items-center justify-center mb-6">
            <div className="border-4 rounded-2xl p-16 bg-blue-900 bg-opacity-30">
              <div className="w-48 h-32 flex items-center justify-center text-blue-400 text-sm">
                Car Image will be kept here in the future
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">
              List Your Vehicle & Earn
            </h2>
            <p className="text-blue-200 text-lg">
              Join 200+ vehicle owners earning with WheelDeal
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50 overflow-y-auto">
        <Formik
          initialValues={{
            accountType: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            licenseNumber: "",
            address: "",
            password: "",
            confirmPassword: "",
            agreeTerms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            alert("FORM SUBMITTED ✅"); // now works

            try {
              const res = await axios.post(
                "http://localhost:8080/auth/register",
                values
              );
              alert(res.data.message || "Account created");
              navigate("/login");
            } catch (err) {
              alert(err.response?.data?.message || "Registration failed");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Create Account
                </h2>
                <p className="text-gray-600">
                  Select your account type and fill in details
                </p>
              </div>

              {/* Account Type */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  I want to:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFieldValue("accountType", "customer")}
                    className={`py-3 rounded-lg border ${
                      values.accountType === "customer"
                        ? "border-orange-500 bg-orange-100"
                        : "border-gray-300"
                    }`}
                  >
                    Customer
                  </button>
                  <button
                    type="button"
                    onClick={() => setFieldValue("accountType", "owner")}
                    className={`py-3 rounded-lg border ${
                      values.accountType === "owner"
                        ? "border-orange-500 bg-orange-100"
                        : "border-gray-300"
                    }`}
                  >
                    Vehicle Owner
                  </button>
                </div>
                {touched.accountType && errors.accountType && (
                  <p className="text-red-500">{errors.accountType}</p>
                )}
              </div>

              {/* Names */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <input
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              {touched.firstName && errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
              {touched.lastName && errors.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
              )}

              {/* Email & Phone */}
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
              {touched.email && errors.email && (
                <p className="text-red-500">{errors.email}</p>
              )}

              <input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
              {touched.phone && errors.phone && (
                <p className="text-red-500">{errors.phone}</p>
              )}

              {/* Owner Fields */}
              {values.accountType === "owner" && (
                <div className="p-4 bg-orange-50 border rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="licenseNumber"
                      value={values.licenseNumber}
                      onChange={handleChange}
                      placeholder="License Number"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                    <input
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      placeholder="Address"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  {touched.licenseNumber && errors.licenseNumber && (
                    <p className="text-red-500">{errors.licenseNumber}</p>
                  )}
                  {touched.address && errors.address && (
                    <p className="text-red-500">{errors.address}</p>
                  )}
                </div>
              )}

              {/* Passwords */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}

              {/* Terms */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={values.agreeTerms}
                  onChange={handleChange}
                />
                I agree to Terms & Privacy Policy
              </label>
              {touched.agreeTerms && errors.agreeTerms && (
                <p className="text-red-500">{errors.agreeTerms}</p>
              )}

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold"
              >
                Create Account
              </button>
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <span className="text-orange-500 font-semibold cursor-pointer">
                  Login
                </span>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
