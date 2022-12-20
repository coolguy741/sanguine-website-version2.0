import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <nav className='fixed w-full flex flex-wrap justify-between items-center sm:px-10 sm:pt-12 pt-4 z-50 px-2 '>
        <img className="w-40 pb-4" src='SANGUINE_LOGO_WHITE.svg' alt="logo"/>
        <ul className='flex flex-wrap text-white text-lg'>
          <li className='sm:px-3 pr-2 active:font-medium'><Link to="/">HOME</Link></li>
          <li className='sm:px-3 pr-2'><Link to="/work">WORK</Link></li>
          <li className='sm:px-3 pr-2'><Link to="/about">ABOUT</Link></li>
          <li className='sm:px-3 pr-2'><Link to="/services">SERVICES</Link></li>
        </ul>
      </nav>
  );
}

export default Navbar;
