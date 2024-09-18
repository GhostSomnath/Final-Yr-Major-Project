import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/themeContext'; // Import your theme context

const Hero1 = () => {
  const { theme } = useTheme(); // Get the current theme from context

  const [background1Color, setBackground1Color] = useState('');
  const [background2Color, setBackground2Color] = useState('');

  // Fetch colors from CSS variables
  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    if (theme === 'light') {
      setBackground1Color(rootStyles.getPropertyValue('--background1Color').trim());
      setBackground2Color(rootStyles.getPropertyValue('--background2Color').trim());
    } else {
      // Apply dark theme colors directly or fetch from CSS
      setBackground1Color('#000000'); // Example dark color
      setBackground2Color('#333333'); // Example dark color
    }
  }, [theme]);

  // Use the colors for gradient background
  const bgGradient = `linear-gradient(135deg, ${background1Color}, ${background2Color})`;

  const headingColor = theme === 'dark' ? '#ffffff' : 'var(--heading1Color)';
  const paragraphColor = theme === 'dark' ? '#dddddd' : 'var(--paragraphColor)';
  const buttonColor = theme === 'dark' ? '#ff0000' : '#00a835';
  const buttonHoverColor = theme === 'dark' ? '#2200ff' : '#0288d1';

  return (
    <section 
      className="relative text-white py-24 px-6"
      style={{ 
        minHeight: '100vh', 
        background: bgGradient 
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="https://source.unsplash.com/random/1600x900"
          alt="Background"
          className="object-cover w-full h-full absolute inset-0 opacity-50"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: headingColor }}
        >
          Welcome to My Website
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: paragraphColor }}
        >
          Discover amazing content and features.
        </motion.p>
        <motion.button
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          style={{ backgroundColor: buttonColor, hover: buttonHoverColor }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero1;
