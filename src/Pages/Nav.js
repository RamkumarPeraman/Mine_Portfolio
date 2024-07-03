import React from 'react';
// import { Link } from 'react-router-dom';
import Prof from '../Components/Prof';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/home');
  };
  const goToAboutPage = () => {
    navigate('/about');
  };
  const goToEducationPage = () => {
    navigate('/education');
  };
  const goToSkillPage = () => {
    navigate('/skill');
  };
  const goToProjectPage = () => {
    navigate('/project');
  };
  const goToContactPage = () => {
    navigate('/contact');
  };
  return (
    <div className='flex flex-col bg-zinc-200 md:w-1/5 w-full h-screen hidden md:block lg:block'>
      <div className='flex justify-center mt-4'>
        <Prof />
      </div>
      <ul className='flex flex-col items-center mt-8'>
        <li className='mb-4'>
          <button className='block p-2 hover:bg-zinc-300 rounded text-center' onClick={goToHomePage}>Home</button>
          {/* <Link to='/' className='block p-2 hover:bg-zinc-300 rounded text-center'>Home</Link> */}
        </li>
        <li className='mb-4'>
        <button className='block p-2 hover:bg-zinc-300 rounded text-center' onClick={goToAboutPage}>About</button>
          {/* <Link to='/about' className='block p-2 hover:bg-zinc-300 rounded text-center'>About</Link> */}
        </li>
        <li className='mb-4'>
        <button className='block p-2 hover:bg-zinc-300 rounded text-center' onClick={goToEducationPage}>Education</button>
          {/* <Link to='/education' className='block p-2 hover:bg-zinc-300 rounded text-center'>Education</Link> */}
        </li>
        <li className='mb-4'>
        <button className='block p-2 hover:bg-zinc-300 rounded text-center' onClick={goToSkillPage}>Skills</button>
          {/* <Link to='/skill' className='block p-2 hover:bg-zinc-300 rounded text-center'>Skills</Link> */}
        </li>
        <li className='mb-4'>
        <button className='block p-2 hover:bg-zinc-300 rounded text-center' onClick={goToProjectPage}>Projects</button>
          {/* <Link to='/project' className='block p-2 hover:bg-zinc-300 rounded text-center'>Projects</Link> */}
        </li>
        <li className='mb-4'>
        <button className='block p-2 hover:bg-zinc-300 rounded text-center' onClick={goToContactPage}>Contact</button>
          {/* <Link to='/contact' className='block p-2 hover:bg-zinc-300 rounded text-center'>Contact</Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Nav;
