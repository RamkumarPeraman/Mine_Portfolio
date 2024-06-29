import React, { useState } from 'react';
import { motion } from 'framer-motion';
import parkoImage from '../img/parko.png';
import ROIImage from '../img/roi.png';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Parko',
      description: 'Enhanced front-end functionality of the User Panel for booking parking lots online.',
      details: 'Detailed description and features of the Parko project developed during a hackathon.',
      photo:parkoImage,
      objectives: [
        'Implement real-time updates for parking availability',
        'Integrate payment gateway for bookings',
      ],
      technologies: ['Html', 'Css', 'Javascript','Leafletjs','Python'],
      contribution: 'My contribution to the Parko project is colleborate with team and build a user panel for booking',
      github: 'https://github.com/TODO-INC/parko'
    },
    {
      id: 2,
      title: 'ROI Calculator',
      description: 'A tool to calculate return on investment for financial projects',
      details: 'Detailed description and features of the ROI alculator project.',
      photo: ROIImage,
      objectives: [
        'Calculate ROI based on user inputs',
        'Display results based on monthly profits and calculate ROI percentage',
      ],
      technologies: ['Nextjs', 'Tailwindcss', 'Pouchdb'],
      contribution: 'My contribution to the project involved developing a dynamic input system to receive user data, passing this data through props, and connecting to PouchDB to store the history',
      github: 'https://github.com/abstalento/72_business_tools'
    },

  ];

  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleExpanded = (projectId) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
    }
  };

  return (
    <section className="projects py-12 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 mt-4 lg:mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:w-[85%] md:w-[90%] ml-[5%] lg:grid-cols-1 gap-8 lg:gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <img src={project.photo} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-t-lg"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-center">
                  
                </div>
              </div>
              <div className="p-6">
                <motion.p
                  className="text-gray-700 leading-6 mb-4"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl lg:text-3xl font-bold">{project.title}</h2>
                  {expandedProjectId === project.id ? project.details : project.description}
                </motion.p>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Objectives</h3>
                  <ul className="list-disc list-inside">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="text-gray-700">{objective}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                  <ul className="list-disc list-inside">
                    {project.technologies.map((tech, index) => (
                      <li key={index} className="text-gray-700">{tech}</li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  className="flex justify-end items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <button
                    onClick={() => toggleExpanded(project.id)}
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    {expandedProjectId === project.id ? 'Show less' : 'View project details'}
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    GitHub
                  </a>
                </motion.div>
                {expandedProjectId === project.id && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">Contribution</h3>
                    <p className="text-gray-700">{project.contribution}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
