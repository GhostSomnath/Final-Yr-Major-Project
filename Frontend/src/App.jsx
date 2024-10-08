import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Internships from './Pages/Internships';
import Updates from './Pages/Updates';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';


import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import { useTheme } from './context/themeContext';
import Profile from './Pages/profile';
function App() {
  const {theme}=useTheme();
  useEffect(()=>{
      document.querySelector("body").className=`${theme}`;
  },[theme]);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* <header className="bg-white text-sky-600 font-bold py-4 text-center">
        </header> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </main>
        <Footer />
      </div>




      

    </Router>
  );
}

export default App;
