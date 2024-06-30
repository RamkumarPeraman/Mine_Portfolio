import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Email: ${email}, Message: ${message}`);
    setEmail('');
    setMessage('');
  };

  return (
    <div className="" id='contact'>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="contact py-20 bg-gray-100 to-purple-200"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-10 text-gray-900"
        >
          Contact Me
        </motion.h1>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8 text-gray-800"
        >
          Feel free to get in touch via email or social media!
        </motion.p>
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-10 space-y-2 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4"
        >
          <li className="text-gray-700">Phone: +91 6380707550</li>
          <li className="text-gray-700">Email: ramkumar777p@gmail.com</li>
        </motion.ul>
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center mb-10 space-x-4"
        >
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 mx-2 sm:mx-4"
          >
            <a href="https://github.com/RamkumarPeraman" target="_blank" rel="noopener noreferrer">
              <FiGithub className="text-3xl sm:text-4xl text-gray-900 hover:text-gray-700 transition-transform duration-300" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 mx-2 sm:mx-4"
          >
            <a href="https://www.linkedin.com/in/ramkumarperaman/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="text-3xl sm:text-4xl text-gray-900 hover:text-gray-700 transition-transform duration-300" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 mx-2 sm:mx-4"
          >
            <a href="https://leetcode.com/u/ramkumarperaman/" target="_blank" rel="noopener noreferrer">
              <FiCode className="text-3xl sm:text-4xl text-gray-900 hover:text-gray-700 transition-transform duration-300" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 mx-2 sm:mx-4"
          >
            <a href="https://www.instagram.com/cholo_idiot" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl sm:text-4xl text-gray-900 hover:text-gray-700 transition-transform duration-300" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 mx-2 sm:mx-4"
          >
            <a href="https://www.facebook.com/r7.idiot" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl sm:text-4xl text-gray-900 hover:text-gray-700 transition-transform duration-300" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 mx-2 sm:mx-4"
          >
            <a href="https://x.com/ramkumarperaman" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl sm:text-4xl text-gray-900 hover:text-gray-700 transition-transform duration-300" />
            </a>
          </motion.li>
        </motion.ul>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email:</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500"
                rows="4"
                placeholder="Enter your message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-transform duration-300 w-full"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
    </div>
  );
}

export default Contact;
