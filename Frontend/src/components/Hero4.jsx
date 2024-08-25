import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image1 from '../assets/ftimg24.png';
import Image2 from '../assets/ftimg25.png';
import Image3 from '../assets/ftimg26.png';

function Hero4() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
      <h2 className="text-3xl font-bold mb-6">
        Success <span className="text-sky-500">Stories</span>
      </h2>
      <section className="flex justify-around w-full max-w-6xl mx-auto space-x-4 py-12">
        <motion.img
          src={Image1}
          alt="Image 1"
          className="w-auto h-auto sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-80 lg:h-80"
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={controls}
        />
        <motion.img
          src={Image2}
          alt="Image 2"
          className="w-auto h-auto sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-80 lg:h-80"
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={controls}
          transition={{ delay: 0.2 }}
        />
        <motion.img
          src={Image3}
          alt="Image 3"
          className="w-auto h-auto sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-80 lg:h-80"
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={controls}
          transition={{ delay: 0.4 }}
        />
      </section>
    </div>
  );
}

export default Hero4;
