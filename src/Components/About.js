import React, { useRef, useEffect } from 'react';
import './css/About.css';
import { motion } from 'framer-motion';

const certifications = [
  { id: 1, title: 'Responsive WebDesign', description: 'Freecodecamp' },
  { id: 2, title: 'Javascript', description: 'Freecodecamp' },
  { id: 3, title: 'Fundamentals of Blockchain', description: 'Udamy' },
];

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const scrollToAbout = () => {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    scrollToAbout();
  }, []);

  return (
    <section ref={aboutRef} className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div
          className="intro-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="intro-title">About Me</div>
          <div className="intro-text">
            I am a Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I create easy-to-use and scalable applications, handling both front-end and back-end development. I enjoy working with others to deliver high-quality results. I am open to new opportunities and excited to connect and innovate with others. Let's work together to create amazing projects!
          </div>
        </motion.div>
        
        <div className="certifications-list">
          <motion.div
            className="certification-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="font-bold mb-2">Certifications:</p>
          </motion.div>
          {certifications.map((certification) => (
            <motion.div
              key={certification.id}
              className="certification-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="certification-title">{certification.title}</div>
              <div className="certification-description">{certification.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
