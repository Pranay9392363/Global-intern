import React from 'react';
import './bodysection.css';

const BodySection = () => {
  return (
    <div className="body-container">
      <h1 className="main-heading">Explore Our Internships</h1>
      <div className="internship-options">
        <div className="internship-option">
          <h2>If You Need Just a Certificate</h2>
          <p>
            Join our certificate-focused internships to gain essential experience and receive a valuable certificate upon completion. These internships are perfect for enhancing your resume and showcasing your commitment to professional development.
          </p>
          <button className="apply-button">Get Certificate</button>
        </div>
        <div className="internship-option">
          <h2>If You Want to Empower Your Skills</h2>
          <p>
            Dive into our skill-empowerment internships designed to provide hands-on experience and in-depth knowledge in your chosen field. These internships focus on building your expertise and preparing you for a successful career.
          </p>
          <button className="apply-button">Skill up Now</button>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
