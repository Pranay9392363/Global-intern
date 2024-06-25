import React from 'react';
import './heroSection.css';

const HeroSection = ({ image, heading, text1,text2, buttonText, buttonLink }) => {
  return (
    <div className="hero-contents1 w-layout-grid">
      <div className="hero-text-wrapper">
        <h1 className="heading-xlarge">{heading}</h1>
        <div className="margin-top">
          <h2 className="hero-subheading1">{text1}</h2>
          <h2 className="hero-subheading2">{text2}</h2>
        </div>
        <div className="margin-top _2em">
          <div className="max-width-xxsmall-2">
            <a href={buttonLink} className="button w-button">{buttonText}</a>
          </div>
        </div>
      </div>
      <div className="hero-img-wrapper">
        <img src={image} loading="eager" alt="Hero" className="hero-img" />
      </div>
    </div>
  );
};

export default HeroSection;
