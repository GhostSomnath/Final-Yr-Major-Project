import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/ftimg22.png'; // Replace with your image path

const Hero1 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-white text-sky-600 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        {/* Content */}
        <div className="flex-1 mb-10 md:mb-0 md:pr-10">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Our Website
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover amazing content and features that will enrich your experience.
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.img
          src={heroImage}
          alt="Hero"
          className="w-full max-w-lg"
          style={{ transform: `translateX(${-scrollY * 0.5}px)` }} // Move image horizontally to the left on scroll up
          transition={{ type: 'spring', stiffness: 100 }}
        />
      </div>
    </section>
  );
};

export default Hero1;
