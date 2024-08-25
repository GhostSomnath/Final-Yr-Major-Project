import React, { useState } from 'react';
import { useTheme } from '../context/themeContext'

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
    <div className={` items-center justify-between min-h-screen p-4 lg:p-8 ${theme}`}>
      <div className={`flex flex-col lg:flex-row items-center justify-between min-h-screen p-4 lg:p-8 ${theme}`}>
        {/* Left Side */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:mr-8">
          <img
            src="https://via.placeholder.com/500x500"
            alt="Contact"
            className="w-full max-w-md rounded-lg shadow-lg justify-center m-auto p-auto"
          />
          <div className="w-full flex flex-col space-y-6 lg:space-y-8 mt-8">
            <div className={`bg-white p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <h2 className="text-xl font-semibold mb-2">Box Title 1</h2>
              <p>Some text for the first box goes here.</p>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <h2 className="text-xl font-semibold mb-2">Box Title 2</h2>
              <p>Some text for the second box goes here.</p>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <h2 className="text-xl font-semibold mb-2">Box Title 3</h2>
              <p>Some text for the third box goes here.</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className={`lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-md lg:ml-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

          {error && <div className={`p-4 rounded mb-4 ${theme === 'dark' ? 'bg-red-700 text-red-100' : 'bg-red-100 text-red-800'}`}>{error}</div>}
          {success && <div className={`p-4 rounded mb-4 ${theme === 'dark' ? 'bg-green-700 text-green-100' : 'bg-green-100 text-green-800'}`}>{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="name">Name</label>
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
              <label className="block font-medium mb-2" htmlFor="email">Email</label>
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
              <label className="block font-medium mb-2" htmlFor="subject">Subject</label>
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
              <label className="block font-medium mb-2" htmlFor="message">Message</label>
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

      <div  className={` w-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div  className={`container mx-auto w-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
          <div role="article" className="bg-gray-100 py-12 md:px-8">
            <div className="px-4 xl:px-0 py-10">
              <div className="flex flex-col lg:flex-row flex-wrap">
                <div className="mt-4 lg:mt-0 lg:w-3/5">
                  <div>
                    <h1  className={`text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold  tracking-normal lg:w-11/12 w-full bg-white ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`} >Frequently asked questions</h1>
                  </div>
                </div>
                <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                  <div className="pt-2 relative  text-gray-600">
                    <input className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                    <button type="submit" className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full  focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4">
                      <svg className=" h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: "new 0 0 56.966 56.966" }} xmlSpace="preserve" width="512px" height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 xl:px-0">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                <div role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md relative h-full w-full">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" />
                    </span>
                    <h1 className={`pb-4 text-2xl ml-2 font-semibold  tracking-normal lg:w-11/12 w-full bg-white ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>Account Overview</h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <h4 className="text-md text-gray-900 dark:text-white">First time, what do I do next?</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white">Changing you profile picture and other information</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">I didnt get a confirmation email, what should I do next</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">What is the refund policy if I have to cancel during the month</h4>
                      </div>
                    </div>
                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                      <p>Show All</p>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md relative h-full w-full">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/bdGyLYk/pricetags-1.png" alt="pricetags-1" />
                    </span>
                    <h1 className={`pb-4 text-2xl ml-2 font-semibold  tracking-normal lg:w-11/12 w-full bg-white ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>Subscription Plans</h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">First time, what do I do next?</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">Changing you profile picture and other information</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">I didnt get a confirmation email, what should I do next</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">What is the refund policy if I have to cancel during the month</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">What is the refund policy?</h4>
                      </div>
                    </div>
                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                      <p>Show All</p>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md relative h-full w-full">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/GT4KHvJ/card-1.png" alt="home-1" />
                    </span>
                    <h1 className={`pb-4 text-2xl ml-2 font-semibold  tracking-normal lg:w-11/12 w-full bg-white ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>Payment Options</h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">First time, what do I do next?</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">Changing you profile picture and other information</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">I didnt get a confirmation email, what should I do next</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">What is the refund policy if I have to cancel during the month</h4>
                      </div>
                    </div>
                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                      <p>Show All</p>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md  h-full relative w-full">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/rG4r6NJ/notifications-1.png" alt="home-1" />
                    </span>
                    <h1 className={`pb-4 text-2xl ml-2 font-semibold  tracking-normal lg:w-11/12 w-full bg-white ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>Notification Settings</h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">First time, what do I do next?</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">Changing you profile picture and other information</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">I didnt get a confirmation email, what should I do next</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">What is the refund policy if I have to cancel during the month</h4>
                      </div>
                    </div>
                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                      <p>Show All</p>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className="relative bg-white p-5 rounded-md relative h-full w-full">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/HFC1hqn/people-1.png" alt="home-1" />
                    </span>
                    <h1 className={`pb-4 text-2xl ml-2 font-semibold  tracking-normal lg:w-11/12 w-full bg-white ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>Profile Preferences</h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">First time, what do I do next?</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">Changing you profile picture and other information</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">I didnt get a confirmation email, what should I do next</h4>
                      </div>
                    </div>
                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                      <p>Show All</p>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className="relative bg-white p-5 rounded-md relative h-full  w-full">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/QX80fYm/lock-closed-1.png" alt="home-1" />
                    </span>
                    <h1 className={`pb-4 text-2xl ml-2 font-semibold  tracking-normal lg:w-11/12 w-full bg-white ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>Privacy and Cookies</h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">First time, what do I do next?</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">Changing you profile picture and other information</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">I didnt get a confirmation email, what should I do next</h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 dark:text-white pl-4">What is the refund policy if I have to cancel during the month</h4>
                      </div>
                    </div>
                    <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                      <p>Show All</p>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
