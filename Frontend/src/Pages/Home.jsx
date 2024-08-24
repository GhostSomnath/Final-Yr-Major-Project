// src/Pages/Home.jsx
import React from 'react';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import { useTheme } from '../context/themeContext';

function Home() {
  const {theme} =useTheme();
  return (
    <div className={theme}>
      <Hero1 />
      <Hero2 />
    </div>
  );
}

export default Home;
