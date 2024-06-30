import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-gray-500 text-white shadow fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold" onClick={handleLinkClick}>RK</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" >Home</a>
                {/* <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={handleLinkClick}>Home</Link> */}
              </li>
              <li>
              <a href="about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" >About</a>
                {/* <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={handleLinkClick}>About</Link> */}
              </li>
              <li>
              <a href="education" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" >Education</a>
                {/* <Link to="/education" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={handleLinkClick}>Education</Link> */}
              </li>
              <li>
              <a href="skills" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" >Skills</a>
                {/* <Link to="/skill" className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium" onClick={handleLinkClick}>Skill</Link> */}
              </li>
              <li>
              <a href="project" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" >Projects</a>
                {/* <Link to="/project" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={handleLinkClick}>Project</Link> */}
              </li>
              <li>
              <a href="contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" >Contact</a>
                {/* <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={handleLinkClick}>Contact</Link> */}
              </li>
            </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li>
            <a href="#" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Home</a>
              {/* <Link to="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Home</Link> */}
            </li>
            <li>
            <a href="#about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>About</a>
              {/* <Link to="/about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>About</Link> */}
            </li>
            <li>
            <a href="#education" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Education</a>
              {/* <Link to="/education" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Education</Link> */}
            </li>
            <li>
            <a href="#skills" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Skills</a>
              {/* <Link to="/skill" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Skill</Link> */}
            </li>
            <li>
            <a href="#project" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Projects</a>
              {/* <Link to="/project" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Project</Link> */}
            </li>
            <li>
            <a href="#contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Contact</a>
              {/* <Link to="/contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Contact</Link> */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
