import React from 'react'
import { Link } from 'react-router-dom'

// const pages = [['Home', '/path'], ['Companies', '/path'], ['Help', '/path'], ['Contact Us', '/path'], ['Legal', '/path'], ['Accugentix', '/path']]

const Navbar = ({ open, click, handleClick }) => {
    console.log(open, click)
  return (
  <nav className="main-nav">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/companies">Companies</Link></li>
      <li><Link to="/help">Help</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/legal">Legal</Link></li>
      <li><a href="https://accugentix.com/" target="_blank">Accugentix</a></li>
    </ul>
  </nav>
)};

export default Navbar