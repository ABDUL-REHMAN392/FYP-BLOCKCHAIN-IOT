import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <nav className="fixed top-0 left-0 w-full md:w-[80%] z-50">
      <div className="md:mx-2 md:mt-4 md:rounded-full overflow-hidden backdrop-blur-md bg-black/40 md:shadow-[0_4px_20px_rgba(59,130,246,0.5)] outline-[1.5px] outline-[#5479f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Always Visible */}
            <NavLink to="/" className="text-xl font-bold text-[#5479f7]">
              DecentraSense
            </NavLink>

            {/* Desktop Links - Only if not on dashboard */}
            {!isDashboard && (
              <div className="hidden md:flex space-x-6 text-white font-medium">
                <a href="#featuers" className="hover:text-[#5479f7]">
                  Features
                </a>
                <a href="#work" className="hover:text-[#5479f7]">
                  How it Works
                </a>
                <a href="#system-diagram" className="hover:text-[#5479f7]">
                  System Diagram
                </a>
                <a href="#faq" className="hover:text-blue-400">
                  FAQ
                </a>
                <a href="#about" className="hover:text-[#5479f7]">
                  About
                </a>
                <a href="#contact" className="hover:text-[#5479f7]">
                  Contact
                </a>
              </div>
            )}

            {/* Mobile menu icon - Only if not on dashboard */}
            {!isDashboard && (
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl text-white">
                  {menuOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu - Only if not on dashboard */}
        {!isDashboard && menuOpen && (
          <div className="md:hidden px-6 py-4 backdrop-blur-md bg-black/60 border-t border-white/10 text-white">
            <div className="flex flex-col space-y-3 font-medium">
              <a href="#featuers" className="hover:text-blue-400">
                Features
              </a>
              <a href="#work" className="hover:text-blue-400">
                How it Works
              </a>
              <a href="#system-diagram" className="hover:text-blue-400">
                System Diagram
              </a>
              <a href="#faq" className="hover:text-blue-400">
                FAQ
              </a>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
