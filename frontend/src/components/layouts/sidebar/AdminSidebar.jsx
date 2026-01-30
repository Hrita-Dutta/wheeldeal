import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Car,
  Calendar,
  DollarSign,
  Star,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const linkClass = ({ isActive }) =>
  `block w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
    isActive ? "bg-white text-orange-500" : "text-gray-400 hover:bg-slate-800"
  }`;

const AdminSidebar = () => {
  return (
    <div className="w-56 bg-slate-900 min-h-screen p-4 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          <span className="text-white">Admin</span>
          <span className="text-orange-500">Panel</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <NavLink to="/admin/dashboard" className={linkClass}>
          <Home size={18} />
          <span className="text-sm font-medium">Dashboard</span>
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
          <Users size={18} />
          <span className="text-sm font-medium">Users</span>
        </NavLink>

        <NavLink to="/admin/vehicles" className={linkClass}>
          <Car size={18} />
          <span className="text-sm font-medium">Vehicles</span>
        </NavLink>

        <NavLink to="/admin/bookings" className={linkClass}>
          <Calendar size={18} />
          <span className="text-sm font-medium">Bookings</span>
        </NavLink>

        <NavLink to="/admin/earnings" className={linkClass}>
          <DollarSign size={18} />
          <span className="text-sm font-medium">Earnings</span>
        </NavLink>

        <NavLink to="/admin/reviews" className={linkClass}>
          <Star size={18} />
          <span className="text-sm font-medium">Reviews</span>
        </NavLink>

        <NavLink to="/admin/moderation" className={linkClass}>
          <Bell size={18} />
          <span className="text-sm font-medium">Moderation</span>
        </NavLink>

        <NavLink to="/admin/settings" className={linkClass}>
          <Settings size={18} />
          <span className="text-sm font-medium">Settings</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-slate-800 rounded-lg transition-colors">
        <LogOut size={18} />
        <span className="text-sm font-medium">Logout</span>
      </button>
    </div>
  );
};

export default AdminSidebar;
