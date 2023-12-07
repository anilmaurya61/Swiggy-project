import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="swiggy-footer">
      <div className="footer-section">
        <h4>Discover</h4>
        <ul>
          <li>About us</li>
          <li>Team</li>
          <li>Careers</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <ul>
          <li>Help & Support</li>
          <li>Partner with us</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
