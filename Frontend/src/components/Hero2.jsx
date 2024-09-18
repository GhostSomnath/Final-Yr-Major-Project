import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/themeContext';

const Hero2 = () => {
  const { theme } = useTheme();

  return (
    <section 
      className="relative py-24 px-6 flex items-center justify-center"
      style={{ backgroundColor: 'var(--background1Color)', color: 'var(--paragraphColor)', minHeight: '100vh' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="https://source.unsplash.com/random/1600x900?nature"
          alt="Background"
          className="object-cover w-full h-full absolute inset-0 opacity-30"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: 'var(--heading1Color)' }}
        >
          Discover Your Next Big Adventure
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: 'var(--paragraphColor)' }}
        >
          Explore opportunities and unleash your potential with our curated selection of adventures and experiences.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border"
            style={{ backgroundColor: 'var(--background2Color)', borderColor: 'var(--background3Color)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--heading2Color)' }}>
              Exciting Opportunities
            </h3>
            <p>
              Dive into a world of possibilities with our wide range of exciting opportunities tailored to your interests and goals.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border"
            style={{ backgroundColor: 'var(--background2Color)', borderColor: 'var(--background3Color)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--heading2Color)' }}>
              Expert Guidance
            </h3>
            <p>
              Receive personalized guidance from experts who are dedicated to helping you succeed and reach new heights.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
