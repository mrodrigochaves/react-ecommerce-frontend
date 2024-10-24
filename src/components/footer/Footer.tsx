import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section company-info">
          <h2 className="company-name">Funiro.</h2>
          <p className="company-address">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>
        <div className="footer-section links">
          <h3>Links</h3>
          <ul className="link-list">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section help">
          <h3>Help</h3>
          <ul className="help-list">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <img src="./assets/line-4.svg" alt="Divider" className="divider" />
      <div className="footer-bottom">
        <p>2023 furino. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;