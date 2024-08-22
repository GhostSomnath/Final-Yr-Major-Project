import React from 'react';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <header className="bg-white text-sky-600 font-bold py-4 text-center">
      </header>
      <main className="flex-grow">
        <Hero1 />
        <Hero2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
