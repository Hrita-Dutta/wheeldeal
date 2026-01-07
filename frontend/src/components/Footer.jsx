import React from "react";
import logo from "../../public/logo/logo_alt.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center py-1">
        <div className="w-295">
          <div className="flex justify-between py-10">
            <div className="w-[23%] flex flex-col gap-3">
              <img src={logo} alt="" width={200} />
              <p>
                Your trusted vehicle rental platform Rent cars, bikes, and more
                with ease. Safe, verified, and affordable.
              </p>
              <span>social icons</span>
            </div>
            <div className="text-[#64748B] ">
              <ul className="flex flex-col gap-2">
                <li className="font-bold italic text-[#1E3A5F]">Quick Links</li>
                <li className="hover:underline">
                  <NavLink>Home</NavLink>
                </li>
                <li className="hover:underline">
                  <NavLink>Vehicles</NavLink>
                </li>
                <li className="hover:underline">
                  <NavLink>About Us</NavLink>
                </li>
              </ul>
            </div>
            {/* For Customers or Owners according to account type */}
            <div className="text-[#64748B] ">
              <ul className="flex flex-col gap-2">
                <li className="font-bold italic text-[#1E3A5F]">
                  For Customers/Owners
                </li>
                <li className="hover:underline">
                  <NavLink>Browse Vehicles/List Your Vehicle</NavLink>
                </li>
                <li className="hover:underline">
                  <NavLink>My Bookings/Owner Dashboard</NavLink>
                </li>
                <li className="hover:underline">
                  <NavLink>Favoritites/Earnings</NavLink>
                </li>
                <li>
                  <NavLink>How to Book/Host Guide</NavLink>
                </li>
              </ul>
            </div>
            <div className="text-[#64748B] ">
              <ul className="flex flex-col gap-2">
                <li className="font-bold italic text-[#1E3A5F]">Support</li>
                <li className="hover:underline">
                  <NavLink>FAQ</NavLink>
                </li>
                <li className="hover:underline">
                  <NavLink>Contact Us</NavLink>
                </li>
                <li className="hover:underline">
                  <NavLink>Terms</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-[#bababa]" />
          <div className="text-center py-5 text-[#64748B]">
            <p>&copy;2026 WheelDeal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
