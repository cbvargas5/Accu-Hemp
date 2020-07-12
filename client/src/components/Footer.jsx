import React from 'react';
import Navbar from './Navbar.jsx';
import SocialButton from './SocialButton.jsx';

const Footer = (props) => (
  <footer>
    <section className="disclaimer-section">
      <Navbar />
      <div className="disclaimer-wrapper">
        <p className="disclaimer-txt"><strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration (FDA) and are not intended to diagnose, treat, cure or prevent any disease. Please consult with a medical professional for any medical advice.</p>
        <br/>
        <p className="disclaimer-note"><strong>Note:</strong> The brands advertised on Accu-Hemp.com, their logos, and their products are not owned by Accugentix LLC, they are owned by their</p>
      </div>
    </section>
    <section className="footer-end-wrapper">
      <div className="copyright-parent">
        <p>&copy; Copyright Accugentix LLC 2020. All rights reserved</p>
      </div>
      <div className="social-wrapper">
        <SocialButton link="https://www.facebook.com/accugentix/" icon="fab fa-facebook-f"/>
        <SocialButton link="https://twitter.com/accuhemp/" icon="fab fa-twitter"/>
        <SocialButton link="https://www.instagram.com/accuhemp/" icon="fab fa-instagram"/>
        <SocialButton link="https://www.pinterest.com/accuhemp/" icon="fab fa-pinterest"/>
      </div>
    </section>
  </footer>
);  

export default Footer