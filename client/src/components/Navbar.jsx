import React from 'react'
import { Link } from 'react-router-dom'

// const pages = [['Home', '/path'], ['Companies', '/path'], ['Help', '/path'], ['Contact Us', '/path'], ['Legal', '/path'], ['Accugentix', '/path']]

const Navbar = (props) => (
  <nav className="main-nav">
    <ul>
      <li><Link to="">Home</Link></li>
      <li><Link to="">Companies</Link></li>
      <li><Link to="">Help</Link></li>
      <li><Link to="">Contact Us</Link></li>
      <li><Link to="">Legal</Link></li>
      <li><a href="https://accugentix.com/" target="_blank">Accugentix</a></li>
    </ul>
  </nav>
);

export default Navbar