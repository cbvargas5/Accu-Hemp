import React, { useState } from 'react';
import Navbar from './Navbar.jsx'
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [click, setClick] = useState('')
  const handleClick = (e) => {
    click ? setClick('') : setClick('change')
  }
  return (
    <header>
      <div className="header-logo-wrapper">
        <div className="image-wrapper">
          <Link to="/"><img src="./images/main-logo.png" alt="Accu-Hemp Main Logo"/></Link>
        </div>
      </div>
      <Navbar />
      <div className={`hamburger-container ${click}`} onClick={handleClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
)};

export default Header