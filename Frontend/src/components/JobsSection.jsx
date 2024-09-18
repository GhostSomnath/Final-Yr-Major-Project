import React from 'react';
import { motion } from 'framer-motion';

const JobsSection = () => {
  return (
    <section 
      className="py-20"
      style={{ backgroundColor: 'var(--background3Color)', color: 'var(--heading1Color)' }}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: 'var(--heading1Color)' }}
        >
          Job Opportunities
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: 'var(--paragraphColor)' }}
        >
          Discover job openings that match your skills and interests.
        </motion.p>
      </div>
    </section>
  );
};

export default JobsSection;
