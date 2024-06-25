import React, { useState } from 'react';
import './navbar.css';  // Import the CSS file
import globe_logo from '../persist_assets/globe_logo.png';  // Update the path to your logo image
import menuIcon from '../persist_assets/menu_icon.svg';  // Update the path to your menu icon image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className={`nav-main_component w-nav ${menuOpen ? 'open' : ''}`} data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner">
        <div className="nav-main_container nav-wrapper">
          <a href="/" aria-current="page" className="nav-main_logo-link w-nav-brand w--current">
            <img src={globe_logo} loading="lazy" alt="Global Intern logo" className="nav-main_logo" />
            <div className="logo-text">
              <h1>GLOBAL</h1>
              <div className="line"></div>
              <h1>INTERN</h1>
            </div>
          </a>
          <div role="navigation" className="nav-main_menu w-nav-menu nav-menu">
            <a href="/" aria-current="page" className="nav-main_link w-inline-block w--current">
              <div className="text-block">Home</div>
            </a>
            <a href="/verify" className="nav-main_link w-inline-block">
              <div>Verify</div>
            </a>
            <a href="/aboutus" className="nav-main_link w-inline-block">
              <div>About</div>
            </a>
            <a href="/contact" className="nav-main_link w-inline-block">
              <div>Contact</div>
            </a>
            <a href="/apply" className="nav-main_button w-inline-block">
              <div>Apply</div>
            </a>
          </div>
          <div className="nav-main_menu-mobile-button w-nav-button" onClick={toggleMenu}>
            <img src={menuIcon} loading="lazy" alt="Menu icon" className="nav-main_menu-mobile-icon" />
          </div>
        </div>
      </div>
      <div className="fs-styleguide-blank-space"></div>
    </div>
  );
};

export default Navbar;
