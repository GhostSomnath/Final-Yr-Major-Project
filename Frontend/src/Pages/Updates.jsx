import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/themeContext';
import CoursesSection from '../components/CoursesSection';
import FreelancingSection from '../components/FreelancingSection';
import JobsSection from '../components/JobsSection';
import ProjectsSection from '../components/ProjectsSection';
import ResourcesSection from '../components/ResourcesSection';

const Updates = () => {
  const { theme } = useTheme(); // Destructure theme from useTheme hook

  return (
    <div className={`min-h-screen p-4 lg:p-8 ${theme === 'dark' ? 'bg-background1Color text-paragraphColor' : 'bg-background2Color text-heading1Color'}`}>
      <div className="flex flex-col space-y-8 lg:space-y-12">
        {/* Updates Messages */}
        <motion.div
          className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-background3Color text-heading2Color' : 'bg-background2Color text-heading1Color'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Updates from WhatsApp/Telegram</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">Update Title 1</h3>
              <p>Details of the update from WhatsApp/Telegram go here.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Update Title 2</h3>
              <p>Details of the update from WhatsApp/Telegram go here.</p>
            </li>
            {/* Add more updates as needed */}
          </ul>
        </motion.div>

        {/* Blog Section */}
        <motion.div
          className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-background3Color text-heading2Color' : 'bg-background2Color text-heading1Color'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">Blog Post Title 1</h3>
              <p>Excerpt from the blog post goes here. Short description or summary of the content.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Blog Post Title 2</h3>
              <p>Excerpt from the blog post goes here. Short description or summary of the content.</p>
            </li>
            {/* Add more blog posts as needed */}
          </ul>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-background3Color text-heading2Color' : 'bg-background2Color text-heading1Color'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">Resource Title 1</h3>
              <p>Description or link to the resource goes here.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Resource Title 2</h3>
              <p>Description or link to the resource goes here.</p>
            </li>
            {/* Add more resources as needed */}
          </ul>
        </motion.div>

        {/* Courses Section */}
        <CoursesSection theme={theme} />

        {/* Freelancing Section */}
        <FreelancingSection theme={theme} />

        {/* Jobs Section */}
        <JobsSection theme={theme} />

        {/* Projects Section */}
        <ProjectsSection theme={theme} />
        
        {/* Resources Section */}
        <ResourcesSection theme={theme} />
      </div>
    </div>
  );
};

export default Updates;
