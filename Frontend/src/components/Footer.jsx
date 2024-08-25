import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image
import { useTheme } from '../context/themeContext';

const Footer = () => {
  const { theme } = useTheme(); // Destructure theme from useTheme hook

  return (
    <footer className={`text-sky-700 py-8 border border-l-0 border-r-0 border-b-0 border-sky-300 soft ${theme}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-12" /> {/* Use imported logo */}
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <ul className={`flex flex-col md:flex-row md:space-x-8 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              <li>
                <a href="/" className="hover:text-sky-500">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-sky-500">About</a>
              </li>
              <li>
                <a href="/services" className="hover:text-sky-500">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-sky-500">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className={`flex space-x-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            <a href="https://facebook.com" className="hover:text-sky-800">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-sky-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-sky-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-sky-800">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className={`mt-8 text-center text-sm ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
          <p>
            <a href="/privacy" className="hover:text-sky-800">
              Privacy Policy
            </a>
            {' | '}
            <a href="/terms" className="hover:text-sky-800">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
