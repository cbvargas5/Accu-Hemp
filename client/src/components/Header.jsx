import React from 'react';
import Navbar from './Navbar.jsx'
import { Link } from 'react-router-dom';

const Header = (props) => (
  <header>
    <div className="header-logo-wrapper">
      <div className="image-wrapper">
        <Link to="/"><img src="./images/main-logo.png" alt="Accu-Hemp Main Logo"/></Link>
      </div>
    </div>
    <div className="main-nav-wrapper">
      <Navbar />
    </div>
  </header>
);

export default Header