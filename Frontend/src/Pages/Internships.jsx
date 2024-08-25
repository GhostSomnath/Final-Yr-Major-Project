import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// Import images
import img1 from '../assets/ftimg3.png';
import img2 from '../assets/ftimg11.png';
import img3 from '../assets/ftimg7.png';
import img4 from '../assets/ftimg16.png';
import { useTheme } from '../context/themeContext';

const internshipsData = {
  basic: [
    { image: img1, title: 'Basic Web Development' },
    { image: img2, title: 'Basic App Development' },
  ],
  proficient: [
    { image: img1, title: 'Proficient Web Development' },
    { image: img2, title: 'Proficient App Development' },
    { image: img3, title: 'Proficient Digital Marketing' },
    { image: img4, title: 'Proficient Content Writter' },
  ],
  advance: [
    { image: img1, title: 'Advance Web Development' },
    { image: img2, title: 'Advance App Development' },
  ],
};

const allInternships = [
  ...internshipsData.basic,
  ...internshipsData.proficient,
  ...internshipsData.advance,
];

function InternshipCard({ image, title }) {
  const { theme } = useTheme();
  const cardClass = `border p-4 rounded-md shadow-md flex flex-col items-center ${theme}`;
  
  return (
    <div className={cardClass}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className={`font-bold text-lg text-center mb-4 ${theme} ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
      <button className="bg-sky-600 text-white px-4 py-2 rounded">Enroll</button>
    </div>
  );
}

function Internships() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme } = useTheme();
  const tabContainerClass = `p-8 ${theme}`;

  const handleTabSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={tabContainerClass}>
      {/* Rules Section */}
      <div className="mb-6 border-l-4 border-sky-500 pl-4 text-red-600">
        <h3 className="font-bold text-lg mb-2">Key Features:</h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <q className="font-bold">Basic Internship</q> contains 1 month internship.
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>Suitable for beginners.</li>
              <li>Introduction to basic concepts.</li>
            </ul>
          </li>
          <li>
            <q className="font-bold">Proficient Internship</q> contains 2 month internship.
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>Intermediate level tasks.</li>
              <li>Hands-on experience with real projects.</li>
            </ul>
          </li>
          <li>
            <q className="font-bold">Advance Internship</q> is of 3 months.
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>Advanced level projects.</li>
              <li>Opportunity to lead a small team.</li>
            </ul>
          </li>
        </ul>
      </div>

      <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
        <TabList className="flex flex-wrap space-x-2 md:space-x-4 border-b-2 mb-4">
          <Tab className={`border-white border p-3 md:p-4 cursor-pointer rounded-t-lg ${selectedIndex === 0 ? 'bg-sky-500 text-white' : ' text-sky-600'} ${theme} ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            All
          </Tab>
          <Tab className={`border-white border p-3 md:p-4 cursor-pointer rounded-t-lg ${selectedIndex === 1 ? 'bg-sky-500 text-white' : ' text-sky-600'} ${theme} ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Basic level
          </Tab>
          <Tab className={`border-white border p-3 md:p-4 cursor-pointer rounded-t-lg ${selectedIndex === 2 ? 'bg-sky-500 text-white' : ' text-sky-600'} ${theme} ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Proficient level
          </Tab>
          <Tab className={`border-white border p-3 md:p-4 cursor-pointer rounded-t-lg ${selectedIndex === 3 ? 'bg-sky-500 text-white' : ' text-sky-600'} ${theme} ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Advance level
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allInternships.map((internship, index) => (
              <InternshipCard key={index} image={internship.image} title={internship.title} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internshipsData.basic.map((internship, index) => (
              <InternshipCard key={index} image={internship.image} title={internship.title} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internshipsData.proficient.map((internship, index) => (
              <InternshipCard key={index} image={internship.image} title={internship.title} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internshipsData.advance.map((internship, index) => (
              <InternshipCard key={index} image={internship.image} title={internship.title} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Internships;
