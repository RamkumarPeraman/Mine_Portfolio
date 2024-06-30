import React from 'react';
import Nav from './Pages/Nav';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Education from './Components/Education';
import Header from './Pages/Header';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* <div className="hidden md:w-[20%] md:block lg:block"> */}
          <Nav />
        {/* </div> */}
        <div className="block md:hidden lg:hidden">
          <Header />
        </div>
        <div className="w-full md:w-[80%] overflow-y-auto h-screen">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/education' element={<Education/>} />
            <Route path='/skill' element={<Skill/>} />
            <Route path='/project' element={<Project />} />
          </Routes>
        </div>
        <div className="md:hidden lg:hidden">
            <Home />
            <About />
            <Education />
            <Skill />
            <Project />
            <Contact />
          </div>

      </div>
    </Router>
  );
}

export default App;