import React from 'react'
import { Link } from 'react-router-dom'

// const pages = [['Home', '/path'], ['Companies', '/path'], ['Help', '/path'], ['Contact Us', '/path'], ['Legal', '/path'], ['Accugentix', '/path']]

const Navbar = ({ open, handleClick }) => {
  return (
  <nav className={`main-nav ${open}`}>
    <ul>
      <li><Link onClick={handleClick} to="/">Home</Link></li>
      <li><Link onClick={handleClick} to="/companies">Companies</Link></li>
      <li><Link onClick={handleClick} to="/help">Help</Link></li>
      <li><Link onClick={handleClick} to="/contact">Contact Us</Link></li>
      <li><Link onClick={handleClick} to="/legal">Legal</Link></li>
      <li><a onClick={handleClick} href="https://accugentix.com/" target="_blank">Accugentix</a></li>
    </ul>
  </nav>
)};

export default Navbar