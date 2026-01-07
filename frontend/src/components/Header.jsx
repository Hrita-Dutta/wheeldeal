import React from "react";
import logo from "../../public/logo/logo_alt.png";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav className="flex justify-center">
        <div className="w-295 flex justify-between items-center py-5">
          <div>
            <img src={logo} alt="" width={150} />
          </div>
          <ul className="flex justify-between items-center gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vehicles"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookings"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                My Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex gap-5">
            <button className="border bg-[#FF6D3A] py-2 px-6 rounded-xl text-white font-bold hover:bg-white hover:text-[#FF6D3A] hover:border-[#FF6D3A] transition duration-300 ease-in-out">
              <a href="/register">Book Now</a>
            </button>
            <button className="border border-[#1E3A5F] bg-transparent py-2 px-6 rounded-xl text-[#1E3A5F] font-bold hover:bg-[#1E3A5F] hover:text-white  transition duration-300 ease-in-out">
              <a href="/login">Log In</a>
            </button>
          </div>
        </div>
      </nav>
      {/* <div className="flex justify-center pb-5">
        <hr className="w-[80%] border-[#E2E8F0]" />
      </div> */}
    </>
  );
};

export default Header;
