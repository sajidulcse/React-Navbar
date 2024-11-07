import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src='/photo/logo.jpg' alt='Logo' className='logo' />
      <h3>Premium Touch <br/>Interior Decor Studio</h3>
      <ul className='nav-menu'>
        <li>Home</li>
        <li className='dropdown'>
          Portfolio<span className="submenu-mark">▼</span>
          <ul className='dropdown-menu'>
            <li>Designs</li>
            <li>Gallery</li>
            <li>Case Studies</li>
          </ul>
        </li>
        <li className='dropdown'>
          Services<span className="submenu-mark">▼</span>
          <ul className='dropdown-menu'>
            <li>Consultation</li>
            <li>Installation</li>
            <li>Custom Projects</li>
          </ul>
        </li>
        <li>Contact</li>
        <li>About Us</li>
        <li>Latest Project</li>
        <li>Video Gallery</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Navbar;
