import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';
import rm from '../img/Rm.png'

const Home = () => {
  return (
    <section className="home bg-cover bg-center min-h-screen flex flex-col lg:flex-row items-center bg-gray-100 overflow-hidden">
      <div className="home-content mt-12 text-center text-black px-4 sm:px-6 lg:px-8 lg:w-1/2 lg:text-left lg:flex lg:flex-col  lg:justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-[50px] lg:text-[50px] font-bold mb-4 mt-8 lg:mt-0"
        >
          <p>Welcome <span className='text-[20px] md:text-2l lg:text-[30px]'>to my page</span> </p>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-5xl lg:text-3xl mb-8 lg:mb-12"
        >
          <span style={{ fontWeight: 'bold' }}>
            <span className='sm:text-xl md:text-6xl lg:text-6xl '> <span className='text-blue-900'>Itz me</span> <span className='text-blue-700'>Ramkumar P</span></span>
          </span> 
          <br />
          <motion.span
            initial={{ fontWeight: 400 }}
            animate={{ fontWeight: 700 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ display: 'inline-block', color: '#ca4f88', marginTop: '7%' }}
            className='gradient-text'
          >
            MERN STACK DEVELOPER...
          </motion.span>
        </motion.p>
      </div>
      <motion.div 
        className="lg:w-1/2 lg:ml-12 mt-[-5%] lg:mt-[-7%] relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative h-80 w-80 lg:h-full lg:w-full lg:mr-10 mr-2 md:rounded-[8%] lg:rounded-[1%] rounded-[1%] overflow-hidden">
          <motion.img 
            src={rm} 
            alt="Ramkumar P" 
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
