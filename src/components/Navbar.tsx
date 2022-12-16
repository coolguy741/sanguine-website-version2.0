import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='z-50'>
      <nav>
        <img className="" src='SANGUINE_LOGO_WHITE.svg' alt="logo"/>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/work">WORK</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;
