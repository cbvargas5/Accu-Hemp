import React from 'react';
import Navbar from './Navbar.jsx'

const Header = (props) => (
  <header>
    <div>
      <a href="#">
        <img src="./images/main-logo.png" alt="Accu-Hemp Main Logo"/>
      </a>
    </div>
    <Navbar />
  </header>
);

export default Header