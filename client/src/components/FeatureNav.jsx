import React from 'react';

const Navbar = (props) => (
  <section className="feature-nav-section underline-sec">
    <nav className="feature-nav">
      {/* Experiment Naver class */}
      <ul>
        <li><span className="steps-nav">Step 1</span><br/>DOSE</li>
        <li><span className="steps-nav">Step 2</span><br/>PRODUCTS</li>
        <li><span className="steps-nav">Step 3</span><br/>MEASURE</li>
      </ul>
    </nav>

  </section>
);

export default Navbar