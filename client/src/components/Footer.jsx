import React from 'react';
import Navbar from './Navbar.jsx';
import SocialButton from './SocialButton.jsx';

const Footer = (props) => (
  <footer>
    <Navbar />
    <div className="disclaimer-wrapper">
      <p className="disclaimer-txt"><strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration (FDA) and are not intended to diagnose, treat, cure or prevent any disease. Please consult with a medical professional for any medical advice.</p>
      <br/>
      <p className="disclaimer-note"><strong>Note:</strong> The brands advertised on Accu-Hemp.com, their logos, and their products are not owned by Accugentix LLC, they are owned by their</p>
    </div>
    <div className="footer-foot-wrapper">
      <div className="copyright-parent">
        <p>&copy; Copyright Accugentix LLC 2020. All rights reserved</p>
      </div>
      <div className="social-wrappers">
        <SocialButton link="https://www.facebook.com/accugentix/" icon="icon-facebook"/>
        <SocialButton link="https://twitter.com/accuhemp/" icon="icon-twitter"/>
        <SocialButton link="https://www.instagram.com/accuhemp/" icon="fab fa-instagram"/>
        <SocialButton link="https://www.pinterest.com/accuhemp/" icon="icon-pinterest"/>
      </div>
    </div>
  </footer>
);  

export default Footer