import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import AuthLayout from "./components/layouts/AuthLayout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import DashboardLayout from "./components/layouts/DashboardLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="faq" element={<FAQ />} />
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
