import React, { useState } from "react";
import logo from "../../../public/logo/logo_alt.png";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-center px-4">
        <div className="w-full lg:container flex justify-between items-center py-5">
          <div>
            <img src={logo} alt="" width={150} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-[#1E3A5F] transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#1E3A5F] transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#1E3A5F] transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-between items-center gap-8">
            <li>
              <NavLink
                to="/"
                end
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

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-5">
            <NavLink
              to="/register"
              className="border bg-[#FF6D3A] py-2 px-6 rounded-xl text-white font-bold hover:bg-white hover:text-[#FF6D3A] hover:border-[#FF6D3A] transition duration-300 ease-in-out"
            >
              Book Now
            </NavLink>

            <NavLink
              to="/login"
              className="border border-[#1E3A5F] bg-transparent py-2 px-6 rounded-xl text-[#1E3A5F] font-bold hover:bg-[#1E3A5F] hover:text-white transition duration-300 ease-in-out"
            >
              Log In
            </NavLink>
          </div>
        </div>
      </nav>
      <hr className="border-[#ebebeb] w-6xl mx-auto" />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          <ul className="flex flex-col gap-6">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLink
                }
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="flex flex-col gap-4 mt-8">
            <NavLink
              to="/register"
              className="border bg-[#FF6D3A] py-3 px-6 rounded-xl text-white font-bold text-center hover:bg-white hover:text-[#FF6D3A] hover:border-[#FF6D3A] transition duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </NavLink>

            <NavLink
              to="/login"
              className="border border-[#1E3A5F] bg-transparent py-3 px-6 rounded-xl text-[#1E3A5F] font-bold text-center hover:bg-[#1E3A5F] hover:text-white transition duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
