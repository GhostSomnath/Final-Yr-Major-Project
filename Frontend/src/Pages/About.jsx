import React from "react";
import { motion } from "framer-motion";
import { useTheme } from '../context/themeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`2xl:container 2xl:mx-auto lg:py-20 lg:px-24 md:py-16 md:px-8 py-12 px-6 ${theme} soft`}
      style={{ 
        background: theme === 'dark' 
        ? `linear-gradient(135deg, var(--background2Color), var(--background3Color))`
        : 'linear-gradient(135deg, var(--background2Color), var(--background3Color))', 
        color: 'var(--paragraphColor)' 
      }}
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl font-extrabold mb-6"
            style={{ color: 'var(--heading1Color)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Welcome to our job portal, where we strive to connect students with valuable opportunities for growth. 
            Our mission is to provide a comprehensive platform where you can enroll in courses, internships, 
            jobs, and freelancing projects, as well as access a wide range of resources and projects.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4"
              style={{ color: 'var(--heading2Color)' }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              To empower students by providing a one-stop platform for all their career-related needs. 
              We aim to facilitate access to educational resources, job opportunities, and practical experience.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4"
              style={{ color: 'var(--heading2Color)' }}
            >
              Our Values
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Integrity, dedication, and innovation drive us. We are committed to providing reliable, 
              transparent, and user-friendly solutions that support the growth and success of every student.
            </motion.p>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--heading3Color)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our team of experts and enthusiasts work tirelessly to ensure the best experience for our users. 
            We are passionate about education and career development, and we are here to support you every step of the way.
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-12 mt-20">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <motion.h1
            className="text-3xl lg:text-4xl font-bold leading-10 mb-6"
            style={{ color: 'var(--heading1Color)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Our Team
          </motion.h1>
          <motion.p
            className="text-base leading-7"
            style={{ color: 'var(--paragraphColor)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from
          </motion.p>
        </div>
        <motion.div
          className="w-full lg:w-8/12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </motion.div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-12 pt-16">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <motion.h1
            className="text-3xl lg:text-4xl font-bold leading-10 mb-6"
            style={{ color: 'var(--heading1Color)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-base leading-7"
            style={{ color: 'var(--paragraphColor)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from
          </motion.p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-6 shadow-lg rounded-lg bg-white p-4">
            <motion.div
              className="p-4 pb-6 flex justify-center flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                className="md:block hidden"
                src="https://i.ibb.co/QfH7DRh/brands.png"
                alt="brands"
              />
              <img
                className="md:hidden"
                src="https://i.ibb.co/7vXb9w8/brands-mobile.png"
                alt="brands"
              />
            </motion.div>
            <motion.div
              className="p-4 pb-6 flex justify-center flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <img
                className="md:block hidden"
                src="https://i.ibb.co/b64JH6C/brands2.png"
                alt="brands"
              />
              <img
                className="md:hidden"
                src="https://i.ibb.co/VJ9b1v6/brands2-mobile.png"
                alt="brands"
              />
            </motion.div>
            <motion.div
              className="p-4 pb-6 flex justify-center flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <img
                className="md:block hidden"
                src="https://i.ibb.co/M5g0Ysj/brands3.png"
                alt="brands"
              />
              <img
                className="md:hidden"
                src="https://i.ibb.co/DwT6gPh/brands3-mobile.png"
                alt="brands"
              />
            </motion.div>
            <motion.div
              className="p-4 pb-6 flex justify-center flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <img
                className="md:block hidden"
                src="https://i.ibb.co/gz5rjZW/brands4.png"
                alt="brands"
              />
              <img
                className="md:hidden"
                src="https://i.ibb.co/qJ3MzbY/brands4-mobile.png"
                alt="brands"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
