import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
