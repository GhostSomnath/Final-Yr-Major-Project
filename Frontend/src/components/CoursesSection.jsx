import React from 'react';
import { motion } from 'framer-motion';

const CoursesSection = () => {
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
          Our Top Courses
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: 'var(--paragraphColor)' }}
        >
          Browse through our curated list of top courses to enhance your skills.
        </motion.p>
      </div>
    </section>
  );
};

export default CoursesSection;
