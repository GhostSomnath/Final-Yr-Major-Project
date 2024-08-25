import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/ftimg13.png'; // Replace with your image path

const Hero2 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        setIsVisible(top < window.innerHeight && bottom > 0);
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={"relative  text-sky-600 py-20 soft overflow-x-hidden"}
    >
      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left"
        initial={{ x: '100vw' }} // Start offscreen to the right
        animate={{ x: isVisible ? '0' : '100vw' }} // Animate to the screen
        transition={{ type: 'spring', stiffness: 50, damping: 15 }} // Smooth and gradual movement
      >
        {/* Hero Image */}
        <motion.img
          src={heroImage}
          alt="Hero"
          className="w-full max-w-lg md:mr-10"
          style={{ transform: `translateX(${Math.max(0, (scrollY - window.innerHeight / 2) * 0.2)}px)` }} // Horizontal movement on scroll
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
      </motion.div>
    </section>
  );
};

export default Hero2;
