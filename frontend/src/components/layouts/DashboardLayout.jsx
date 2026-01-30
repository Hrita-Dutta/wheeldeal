import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
// import { Sidebar } from "lucide-react";
import DynamicSidebar from "./sidebar/DynamicSidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <DynamicSidebar />

        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
