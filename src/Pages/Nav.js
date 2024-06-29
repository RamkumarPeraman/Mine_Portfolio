import React from 'react';
import { Link } from 'react-router-dom';
import Prof from '../Components/Prof';

const Nav = () => {
  return (
    <div className='flex flex-col bg-zinc-200 md:w-1/5 w-full h-screen hidden md:block lg:block'>
      <div className='flex justify-center mt-4'>
        <Prof />
      </div>
      <ul className='flex flex-col items-center mt-8'>
        <li className='mb-4'>
          <Link to='/' className='block p-2 hover:bg-zinc-300 rounded text-center'>Home</Link>
        </li>
        <li className='mb-4'>
          <Link to='/about' className='block p-2 hover:bg-zinc-300 rounded text-center'>About</Link>
        </li>
        <li className='mb-4'>
          <Link to='/education' className='block p-2 hover:bg-zinc-300 rounded text-center'>Education</Link>
        </li>
        <li className='mb-4'>
          <Link to='/skill' className='block p-2 hover:bg-zinc-300 rounded text-center'>Skills</Link>
        </li>
        <li className='mb-4'>
          <Link to='/project' className='block p-2 hover:bg-zinc-300 rounded text-center'>Projects</Link>
        </li>
        <li className='mb-4'>
          <Link to='/contact' className='block p-2 hover:bg-zinc-300 rounded text-center'>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
