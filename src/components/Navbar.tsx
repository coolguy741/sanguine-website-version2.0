import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/work/pornbrain">porn brain</Link>
          </li>
          <li>
            <Link to="/work/SpotLeukaemia">Spot Leukaemia</Link>
          </li>
          <li>
            <Link to="/work/futureofsurgery">future of surgery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
