import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => (
  <section className="feature-nav-section underline-sec">
    <nav className="feature-nav">
      <ul>
        <li><NavLink to="/dose"><span className="steps-nav">Step 1</span><br/>DOSE</NavLink></li>
        <li><span className="steps-nav">Step 2</span><br/>PRODUCTS</li>
        <li><span className="steps-nav">Step 3</span><br/>MEASURE</li>
      </ul>
    </nav>

  </section>
);

export default Navbar