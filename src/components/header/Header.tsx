import React from 'react';
import './styles.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo-section">
        <img src="./assets/meubel-house-logos-05.svg" alt="Logo" className="logo-image" />
        <span className="logo-text">Furniro</span>
      </div>
      <nav className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#shop" className="nav-link">Shop</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
      <div className="icon-section">
      <img src="./assets/mdi-account-alert-outline.svg" alt="Account" className="icon" />
        <img src="./assets/akar-icons-search.svg" alt="Search" className="icon" />
        <img src="./assets/akar-icons-heart.svg" alt="Favorite" className="icon" />
        <img src="./assets/ant-design-shopping-cart-outlined.svg" alt="Cart" className="icon" />
      </div>
    </div>
  );
}

export default Header;