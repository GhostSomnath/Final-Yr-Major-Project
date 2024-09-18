import React from 'react';
import { motion } from 'framer-motion';

const Hero6 = () => {
  return (
    <section 
      className="py-20"
      style={{ backgroundColor: 'var(--background2Color)', color: 'var(--heading3Color)' }}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: 'var(--heading3Color)' }}
        >
          What Our Users Say
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: 'var(--paragraphColor)' }}
        >
          Read testimonials from our users about their experience with our platform.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero6;
