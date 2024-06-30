import React from 'react';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMysql, SiPython, SiNodeDotJs, SiMongodb } from 'react-icons/si';
import { FaBootstrap, FaFigma, FaJava } from 'react-icons/fa';
import { DiNodejsSmall } from 'react-icons/di';
import { RiTailwindCssFill } from "react-icons/ri";
import Clang from './Clang.js';

const Skill = () => {

  const listItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const skills = [
    { name: 'HTML', icon: <SiHtml5 size={48} color="#E44D26" /> },
    { name: 'CSS', icon: <SiCss3 size={48} color="#1572B6" /> },
    { name: 'JavaScript', icon: <SiJavascript size={48} color="#F0DB4F" /> },
    { name: 'TailwindCSS', icon: <RiTailwindCssFill size={48} color="#38B2AC" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={48} color="#7952B3" /> },
    { name: 'ReactJS', icon: <SiReact size={48} color="#61DAFB" /> },
    { name: 'MySQL', icon: <SiMysql size={48} color="#4479A1" /> },
    { name: 'MongoDB', icon: <SiMongodb size={48} color="#A8B9CC" /> },
    { name: 'C', icon: <Clang size={48} color="#A8B9CC" /> },
    { name: 'Java', icon: <FaJava size={48} color="#A8B9CC" /> },
    { name: 'Python', icon: <SiPython size={48} color="#3776AB" /> },
    { name: 'NodeJS', icon: <DiNodejsSmall size={48} color="#68A063" /> },
    { name: 'ExpressJS', icon: <DiNodejsSmall size={48} color="#000000" /> },
    { name: 'Figma', icon: <FaFigma size={48} color="#F24E1E" /> }
  ];

  return (
    <div className="" id='skills'>
    <motion.section
      className="skills py-20 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h1>
        <motion.ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-gray-200 p-4 rounded-lg text-center flex flex-col items-center justify-center"
              variants={listItemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              {skill.icon}
              <div className="mt-2 text-center">{skill.name}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
    </div>
  );
};

export default Skill;
