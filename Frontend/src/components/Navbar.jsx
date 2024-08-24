import React, { useState } from 'react';
import { FaUser, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Import logo image
import { useTheme } from '../context/themeContext';
import {Link} from "react-router-dom";
const Navbar = () => {
  const {theme,setTheme}=useTheme();
  console.log(theme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    isDarkMode?setTheme("light"):setTheme("dark");
  };

  return (
    <nav className={`text-sky-700 border-b border-sky-300 sticky top-0 z-50 ${theme} soft`}>
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="h-10">
          <img src={logo} alt="Logo" className="h-full object-cover" /> {/* Use imported logo */}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-sky-700 hover:text-sky-500">
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <Link to="/" className="hover:text-sky-500">Home</Link>
          <Link to="/internships" className="hover:text-sky-500">Internships</Link>
          <Link to="/updates" className="hover:text-sky-500">Updates</Link>
          <Link to="/about" className="hover:text-sky-500">About</Link>
          <Link to="/contact" className="hover:text-sky-500">Contact Us</Link>
        </div>

        {/* Right End Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4 items-center">
          <button onClick={toggleTheme} className="text-sky-700 hover:text-sky-500 flex items-center space-x-2">
            {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            <span>Theme</span>
          </button>
          <button className="text-sky-700 hover:text-sky-500 flex items-center space-x-2">
            <FaUser size={20} />
            <span>Profile</span>
          </button>
        </div>
      </div>

      {/* Backdrop Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50" />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-sky-700 border-b border-sky-300 flex flex-col items-center pt-4 z-50">
          {/* Close Button */}
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-sky-700 hover:text-sky-500">
            <FaTimes size={24} />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-4 mt-10">
            <a to="/" className="hover:text-sky-500">Home</a>
            <a to="/internships" className="hover:text-sky-500">Internships</a>
            <a to="/updates" className="hover:text-sky-500">Updates</a>
            <a to="/about" className="hover:text-sky-500">About</a>
            <a to="/contact" className="hover:text-sky-500">Contact Us</a>
            <button onClick={toggleTheme} className="text-sky-700 hover:text-sky-500 flex items-center space-x-2">
              {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
              <span>Theme</span>
            </button>
            <button className="text-sky-700 hover:text-sky-500 flex items-center space-x-2">
              <FaUser size={20} />
              <span>Profile</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
