import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/themeContext'; // Import your theme context

const InternshipsSection = () => {
  const { theme } = useTheme(); // Get the current theme from context

  return (
    <section 
      className="py-20"
      style={{ 
        backgroundColor: 'var(--background2Color)', // Use CSS variable directly
        color: 'var(--heading3Color)', // Use CSS variable directly
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: 'var(--heading3Color)' }} // Use CSS variable directly
        >
          Available Internships
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: 'var(--paragraphColor)' }} // Use CSS variable directly
        >
          Find the best internships that align with your career goals.
        </motion.p>
      </div>
    </section>
  );
};

export default InternshipsSection;
