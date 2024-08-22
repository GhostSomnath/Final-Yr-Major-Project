import React from 'react';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <header className="bg-white text-sky-600 font-bold py-4 text-center">
        <h1>My Website</h1>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h2>Welcome to My Website</h2>
          <p>This is the main content area.</p>
          <p>loram loram loram loram loram loram loram loram loram loram loram loram loram </p>
          <p>loram loram loram loram loram loram loram loram loram loram loram loram loram </p>
          <p>loram loram loram loram loram loram loram loram loram loram loram loram loram </p>
          <p>loram loram loram loram loram loram loram loram loram loram loram loram loram </p>
          <p>loram loram loram loram loram loram loram loram loram loram loram loram loram </p>
          <p>loram loram loram loram loram loram loram loram loram loram loram loram loram </p>
          
          
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
