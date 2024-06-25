import React from 'react';
import './about_us.css'; // Make sure to create and import the CSS file
import EarthImage from '../../components/persist_assets/globe_logo.png' // Up
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-content">
        <h1 className="about-heading">About Global Intern</h1>
        <h3 className="about-subheading">Empowering the Next Generation of Tech Leaders</h3>
        <p className="about-text">
          Global Intern partners with aspiring tech leaders and businesses worldwide to provide hands-on internships across various fields. Our mission is to bridge the gap between education and industry by equipping young minds with practical skills and experiences.
        </p>
        <blockquote className="about-quotation">
          "Investing in young talent is not just about preparing for the future; it's about shaping it."
        </blockquote>
      </div>
      <div className="earth-animation">
        <img src={EarthImage} alt="Earth" className="earth-img" />
      </div>
    </div>
  );
};

export default AboutUs;
