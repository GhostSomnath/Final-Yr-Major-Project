import React, { useState } from 'react';
import { useTheme } from '../context/themeContext';
import { motion } from 'framer-motion';
import Stats from '../components/Stats';

function ContactUs() {
  const { theme } = useTheme(); // Destructure theme from useTheme hook

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    // Simulate form submission
    setSuccess('Your message has been sent successfully!');
    setError('');
  };

  return (
    <div className={`min-h-screen p-4 lg:p-8 ${theme === 'dark' ? 'bg-background1Color text-paragraphColor' : 'bg-background2Color text-heading1Color'}`}>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Side */}
        <motion.div
          className="lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:mr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://via.placeholder.com/500x500"
            alt="Contact"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
          <div className="w-full flex flex-col space-y-6 lg:space-y-8 mt-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-background3Color text-heading3Color' : 'bg-background2Color text-heading2Color'}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-xl font-semibold mb-2">Box Title {item}</h2>
                <p>Some text for box {item} goes here.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className={`lg:w-1/2 w-full p-8 rounded-lg shadow-md ${theme === 'dark' ? 'bg-background3Color text-heading2Color' : 'bg-background2Color text-heading1Color'}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

          {error && (
            <div className={`p-4 rounded mb-4 ${theme === 'dark' ? 'bg-red-700 text-red-100' : 'bg-red-100 text-red-800'}`}>
              {error}
            </div>
          )}
          {success && (
            <div className={`p-4 rounded mb-4 ${theme === 'dark' ? 'bg-green-700 text-green-100' : 'bg-green-100 text-green-800'}`}>
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {['name', 'email', 'subject'].map((field) => (
              <div className="mb-4" key={field}>
                <label className="block font-medium mb-2" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-600 bg-background3Color text-heading2Color focus:ring-blue-500' : 'border-gray-300 bg-background2Color text-heading1Color focus:ring-blue-500'}`}
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-600 bg-background3Color text-heading2Color focus:ring-blue-500' : 'border-gray-300 bg-background2Color text-heading1Color focus:ring-blue-500'}`}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full p-3 rounded-md ${theme === 'dark' ? 'bg-hover1Color hover:bg-hover2Color' : 'bg-hover2Color hover:bg-hover3Color'} text-white`}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <Stats />
    </div>
  );
}

export default ContactUs;
