import React, { useState } from 'react';
import { useTheme } from '../context/themeContext';
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
    <div className={`min-h-screen p-4 lg:p-8 ${theme}`}>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:mr-8">
          <img
            src="https://via.placeholder.com/500x500"
            alt="Contact"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
          <div className="w-full flex flex-col space-y-6 lg:space-y-8 mt-8">
            <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <h2 className="text-xl font-semibold mb-2">Box Title 1</h2>
              <p>Some text for the first box goes here.</p>
            </div>
            <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <h2 className="text-xl font-semibold mb-2">Box Title 2</h2>
              <p>Some text for the second box goes here.</p>
            </div>
            <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <h2 className="text-xl font-semibold mb-2">Box Title 3</h2>
              <p>Some text for the third box goes here.</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className={`lg:w-1/2 w-full p-8 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
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
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 bg-white text-gray-800 focus:ring-blue-500'}`}
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 bg-white text-gray-800 focus:ring-blue-500'}`}
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 bg-white text-gray-800 focus:ring-blue-500'}`}
              />
            </div>

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
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 bg-white text-gray-800 focus:ring-blue-500'}`}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Stats />
    </div>
  );
}

export default ContactUs;
