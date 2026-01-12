import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState("Bookings");

  const tabs = ["Bookings", "Payments", "Reviews", "Activity"];

  const userInfo = {
    name: "Bikash Thapa",
    role: "Owner",
    userId: "#USR-0004",
    joined: "Jan 2024",
    status: "Active",
    avatar: "BT",
    avatarColor: "bg-orange-500",
    email: "bikash@email.com",
    phone: "+977-9841000000",
    dob: "1988-08-09",
    address: "Balkumari, Lalitpur, Bagmati, Nepal | ZIP 44600",
    memberSince: "Jan 2024",
    lastLogin: "Feb 5, 2026 14:22",
  };

  const bookings = [
    {
      vehicle: "Hyundai Creta",
      dates: "Jan 5 - Jan 8",
      amount: "Rs. 12,000",
      status: "Completed",
    },
    {
      vehicle: "Toyota Fortuner",
      dates: "Dec 14 - Dec 17",
      amount: "Rs. 24,000",
      status: "Completed",
    },
    {
      vehicle: "Royal Enfield",
      dates: "Nov 9 - Nov 11",
      amount: "Rs. 3,000",
      status: "Completed",
    },
  ];

  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-slate-800 mb-8 ">User Details</h1>

      {/* User Profile Section */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div
              className={`w-24 h-24 rounded-full ${userInfo.avatarColor} flex items-center justify-center text-white font-bold text-3xl`}
            >
              {userInfo.avatar}
            </div>

            {/* User Info */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold text-slate-800 ">
                  {userInfo.name}
                </h2>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  {userInfo.role}
                </span>
              </div>
              <p className="text-gray-600 mb-1">User ID: {userInfo.userId}</p>
              <p className="text-gray-600">Joined: {userInfo.joined}</p>
              <div className="mt-3">
                <span className="px-4 py-1.5 bg-green-500 text-white rounded-full text-sm font-medium">
                  {userInfo.status}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Reset Pass
            </button>
            <button className="px-6 py-2 border border-red-300 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
              Deactivate
            </button>
          </div>
        </div>

        {/* Contact Information and Address */}
        <div className="grid grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 ">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="text"
                  value={userInfo.email}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  value={userInfo.phone}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Date of Birth
                </label>
                <input
                  type="text"
                  value={userInfo.dob}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 ">Address</h3>
            <div className="space-y-4">
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                {userInfo.address}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Member Since
                </label>
                <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                  {userInfo.memberSince}
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Last Login
                </label>
                <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                  {userInfo.lastLogin}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delete User Warning */}
        <div className="mt-6 flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-red-600" size={20} />
            <span className="text-red-600 font-medium">Delete User</span>
            <span className="text-red-600 text-sm">
              This action cannot be undone
            </span>
          </div>
          <button className="px-6 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
            Delete
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white rounded-lg shadow-sm">
        {/* Tab Headers */}
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === tab
                  ? "bg-slate-800 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content - Bookings */}
        {activeTab === "Bookings" && (
          <div className="p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6 ">
              Recent Bookings
            </h3>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-4 text-sm font-medium text-gray-600">
                    Vehicle
                  </th>
                  <th className="pb-4 text-sm font-medium text-gray-600">
                    Dates
                  </th>
                  <th className="pb-4 text-sm font-medium text-gray-600">
                    Amount
                  </th>
                  <th className="pb-4 text-sm font-medium text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-4 text-gray-700 font-medium">
                      {booking.vehicle}
                    </td>
                    <td className="py-4 text-gray-600">{booking.dates}</td>
                    <td className="py-4 text-green-600 font-semibold">
                      {booking.amount}
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Other tabs content */}
        {activeTab === "Payments" && (
          <div className="p-8">
            <p className="text-gray-600">
              Payments content will be displayed here.
            </p>
          </div>
        )}
        {activeTab === "Reviews" && (
          <div className="p-8">
            <p className="text-gray-600">
              Reviews content will be displayed here.
            </p>
          </div>
        )}
        {activeTab === "Activity" && (
          <div className="p-8">
            <p className="text-gray-600">
              Activity content will be displayed here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
