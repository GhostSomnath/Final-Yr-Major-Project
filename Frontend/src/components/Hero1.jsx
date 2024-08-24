import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/ftimg22.png'; // Replace with your image path
import { useTheme } from '../context/themeContext';

// eslint-disable-next-line react/prop-types
const Slide = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className="mb-6"
    >
      {children}
    </motion.div>
  );
};

const Hero1 = () => {
  const {theme}=useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`relative  text-sky-600 py-20 ${theme} soft`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        {/* Content */}
        <div className="flex-1 mb-10 md:mb-0 md:pr-10">
          <Slide>
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to Our Website
            </motion.h1>
          </Slide>
          <Slide delay={0.5}>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Discover amazing content and features that will enrich your experience.
            </motion.p>
          </Slide>
        </div>

        {/* Hero Image */}

        <Slide delay={0.5}>
        <motion.img
          src={heroImage}
          alt="Hero image showcasing our content"
          className="w-full max-w-lg"
          style={{ transform: `translateX(${-scrollY * 0.5}px)` }} // Move image horizontally to the left on scroll up
          transition={{ type: 'spring', stiffness: 100 }}
        />
        </Slide>
      </div>
    </section>
  );
};

export default Hero1;
