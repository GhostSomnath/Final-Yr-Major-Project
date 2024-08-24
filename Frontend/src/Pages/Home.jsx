

// folow this link to get animations : https://dbramwell.github.io/react-animate-on-scroll/#initiallyVisible


import React from 'react';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';

import { useTheme } from '../context/themeContext';
import Hero3 from '../components/Hero3';
// import ScrollAnimation from 'react-animate-on-scroll';


function Home() {
  const {theme} =useTheme();
  return (
    <div className={theme}>
      <Hero1 />
      <Hero2 />
      <Hero3 />



      {/* <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <h1 className='text-3xl text-center font-bold text-red-600'>
          React Animate On Scroll
        </h1>
        <h2 className='text-2xl text-center font-bold text-red-600'>
          Using:
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
        <h2 className='text-2xl text-center font-bold text-red-600'>
          <a href='#'>
            Animate.css
          </a>
        </h2>
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeIn'>
        <h1 className='text-3xl text-center font-bold text-red-600'>
          Fade In Animation
        </h1>
      </ScrollAnimation>


      <ScrollAnimation animateIn='flipInY'
        animateOut='flipOutY'>
        <h1 className='text-3xl text-center font-bold text-red-600'>
          Flip in and out animation
        </h1>
      </ScrollAnimation>


      <ScrollAnimation duration={5}
        animateIn='hinge'
        initiallyVisible={true}>
        <h1 className='text-3xl text-center font-bold text-red-600'>
          Hinge animation
        </h1>
      </ScrollAnimation> */}




      

      

    </div>
  );
}

export default Home;
