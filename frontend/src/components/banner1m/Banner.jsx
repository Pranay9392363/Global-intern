// Banner.js
import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <h1 className="banner-count">1M+</h1>
        <p className="banner-text">Registered Worldwide</p>
      </div>
      <div className="banner-right">
        <h2 className="banner-subtitle">Skilled Up</h2>
        <p className="banner-description">Join Global Intern to enhance your skills and connect with a global community of tech enthusiasts.</p>
      </div>
    </div>
  );
};

export default Banner;
