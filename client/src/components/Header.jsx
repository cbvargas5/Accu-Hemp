import React, { useState } from 'react';
import Navbar from './Navbar.jsx'
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [click, setClick] = useState('')
  const [open, setOpen] = useState('')

  const handleClick = () => {
    click ? setClick('') : setClick('change')
    open ? setOpen('') : setOpen('open')
  }
  return (
    <header>
      <div className="header-logo-wrapper">
        <div className="image-wrapper">
          <Link to="/"><img src="./images/main-logo.png" alt="Accu-Hemp Main Logo"/></Link>
        </div>
      </div>
      <Navbar open={open} click={click} handleClick={handleClick} />
      <div className={`hamburger-container ${click}`} onClick={handleClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
)};

export default Header