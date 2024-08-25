// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Image1 from '../assets/devices.svg';

const HeroSection = () => {
    return (
        <div >


            {/* Main */}
            <div className=" pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                {/* Left Col */}
                <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <motion.h1
                        className="my-4 text-3xl md:text-5xl text-sky-400 font-bold leading-tight text-center md:text-left"
                        initial={{ opacity: 0, transform: 'translateY(1000px)' }}
                        animate={{ opacity: 1, transform: 'translateY(0)' }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Main Hero Message to sell your app
                    </motion.h1>
                    <motion.p
                        className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left"
                        initial={{ opacity: 0, transform: 'translateY(1000px)' }}
                        animate={{ opacity: 1, transform: 'translateY(0)' }}
                        transition={{ duration: 0.5, delay: 0.75 }}
                    >
                        Sub-hero message, not too long and not too short. Make it just right!
                    </motion.p>


                </div>
                {/* Right Col */}
                <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                    <motion.img
                        className="w-5/6 mx-auto lg:mr-0"
                        src={Image1}
                        initial={{ opacity: 0, transform: 'translateY(1000px)' }}
                        animate={{ opacity: 1, transform: 'translateY(0)' }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
