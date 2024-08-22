import React from 'react';
import { FaUser, FaMoon, FaSun } from 'react-icons/fa'; // For profile and theme icons

const Navbar = () => {
  return (
    <nav className="bg-white text-sky-700 border-b border-sky-300 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="../assets/logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex justify-center space-x-6">
          <a href="/" className="hover:text-sky-500">Home</a>
          <a href="/contact" className="hover:text-sky-500">Contact</a>
          <a href="/about" className="hover:text-sky-500">About</a>
          <a href="/jobs" className="hover:text-sky-500">Jobs</a>
        </div>

        {/* Right End (Profile and Theme Buttons) */}
        <div className="flex space-x-4 items-center">
          <button className="text-sky-700 hover:text-sky-500">
            <FaUser size={20} />
          </button>
          <button className="text-sky-700 hover:text-sky-500">
            <FaSun size={20} />
            {/* Alternatively, you can use FaMoon for dark mode */}
            {/* <FaMoon size={20} /> */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
