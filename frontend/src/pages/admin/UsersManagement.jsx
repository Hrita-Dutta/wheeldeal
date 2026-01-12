import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const UsersManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [sortBy, setSortBy] = useState("Sort By");

  const users = [
    {
      name: "Bikash Thapa",
      email: "bikash@email.com",
      role: "Owner",
      phone: "+977-9841000000",
      joined: "Jan 2024",
      status: "Active",
      avatar: "BT",
      avatarColor: "bg-orange-500",
    },
    {
      name: "Suman Karki",
      email: "skarki@email.com",
      role: "Customer",
      phone: "+977-9842001000",
      joined: "Feb 2025",
      status: "Active",
      avatar: "SK",
      avatarColor: "bg-slate-700",
    },
    {
      name: "Sita Shrestha",
      email: "sita@email.com",
      role: "Owner",
      phone: "+977-988800123",
      joined: "Nov 2024",
      status: "Pending",
      avatar: "SS",
      avatarColor: "bg-orange-500",
    },
    {
      name: "Rita Gurung",
      email: "rgurung@email.com",
      role: "Customer",
      phone: "+977-9898989898",
      joined: "Aug 2024",
      status: "Deactivated",
      avatar: "RG",
      avatarColor: "bg-red-500",
    },
  ];

  const getRoleStyle = (role) => {
    if (role === "Owner") {
      return "bg-blue-100 text-blue-700";
    }
    return "bg-yellow-100 text-yellow-700";
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Deactivated":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-slate-800 mb-8 ">
        Users Management
      </h1>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by name, email, phone"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* All Types Dropdown */}
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <span className="text-gray-700">{selectedType}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <span className="text-gray-700">{selectedStatus}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <span className="text-gray-700">{sortBy}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>
          </div>

          {/* Add New User Button */}
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
            + New User
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-6 ">All Users</h2>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-4 text-sm font-medium text-gray-600">Name</th>
                <th className="pb-4 text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="pb-4 text-sm font-medium text-gray-600">Role</th>
                <th className="pb-4 text-sm font-medium text-gray-600">
                  Phone
                </th>
                <th className="pb-4 text-sm font-medium text-gray-600">
                  Joined
                </th>
                <th className="pb-4 text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="pb-4 text-sm font-medium text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${user.avatarColor} flex items-center justify-center text-white font-semibold text-sm`}
                      >
                        {user.avatar}
                      </div>
                      <span className="font-medium text-slate-700">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-600 text-sm">{user.email}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleStyle(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 text-gray-600 text-sm">{user.phone}</td>
                  <td className="py-4 text-gray-600 text-sm">{user.joined}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1-18 of 2250 users</p>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button className="px-4 py-2 rounded-lg bg-slate-800 text-white font-medium">
              1
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-gray-600">
              2
            </button>
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
