import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
        <nav className='navContainer'>
            <ul className='navmenu'>       
                <li> <a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services </a>   </li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav>

  );
}

export default Nav;

// <li><Link to="/">Home</Link></li>