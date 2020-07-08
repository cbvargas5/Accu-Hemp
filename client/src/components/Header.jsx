import React from 'react';
import Navbar from './Navbar.jsx'

const Header = (props) => (
  <header>
    <div className="header-logo-wrapper">
      <div className="image-wrapper">
        <a href="#">
          <img src="./images/main-logo.png" alt="Accu-Hemp Main Logo"/>
        </a>
      </div>
    </div>
    <div className="main-nav-wrapper">
      <Navbar />
    </div>
  </header>
);

export default Header