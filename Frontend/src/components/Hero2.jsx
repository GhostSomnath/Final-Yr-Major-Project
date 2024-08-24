import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/ftimg13.png'; // Replace with your image path
import { useTheme } from '../context/themeContext';

const Hero2 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const {theme} =useTheme();
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        // Check if half of the section is visible
        setIsVisible(top < window.innerHeight / 2 && bottom > window.innerHeight / 2);
      }
      // Update scrollY
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={"relative  text-sky-600 py-20 soft "+theme}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        {/* Hero Image */}
        <motion.img
          src={heroImage}
          alt="Hero"
          className="w-full max-w-lg md:mr-10"
          style={{ transform: `translateX(${isVisible ? Math.max(0, (scrollY - window.innerHeight / 2) * 0.2) : 0}px)` }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }} // Smooth and gradual movement
        />

        {/* Content */}
        <div className="flex-1 mb-10 md:mb-0 md:pl-10">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover More with Us
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Explore our diverse offerings and find out how we can help you achieve your goals.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
