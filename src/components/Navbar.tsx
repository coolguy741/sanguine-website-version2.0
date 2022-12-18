import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <nav className='fixed w-full flex justify-between items-center px-7 py-8 z-50'>
        <img className="w-40" src='SANGUINE_LOGO_WHITE.svg' alt="logo"/>
        <ul className='flex text-white text-lg'>
          <li className='px-3 active:font-medium'><Link to="/">HOME</Link></li>
          <li className='px-3'><Link to="/work">WORK</Link></li>
          <li className='px-3'><Link to="/about">ABOUT</Link></li>
          <li className='px-3'><Link to="/services">SERVICES</Link></li>
        </ul>
      </nav>
  );
}

export default Navbar;
