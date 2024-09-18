import React from 'react';
import { motion } from 'framer-motion';

const Hero8 = () => {
  return (
    <section 
      className="py-20"
      style={{ backgroundColor: 'var(--background1Color)', color: 'var(--heading2Color)' }}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: 'var(--heading2Color)' }}
        >
          Subscribe for Updates
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: 'var(--paragraphColor)' }}
        >
          Stay updated with the latest news and opportunities from our job portal.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-2 border border-gray-300 rounded-md" 
            style={{ backgroundColor: 'var(--background2Color)', color: 'var(--paragraphColor)' }}
          />
          <button 
            className="ml-4 p-2 bg-blue-500 text-white rounded-md"
            style={{ backgroundColor: 'var(--Hover1Color)' }}
          >
            Subscribe
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero8;
