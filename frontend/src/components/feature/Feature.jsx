import React from 'react';
import './feature.css';

const Feature = ({ icon, alt, heading, text, href }) => {
  return (
    <div className="feature-item">
      <div className="features-icon">
        <img src={icon} loading="lazy" alt={alt} className="icon-1x1-small" />
      </div>
      <div className="feature-heading-wrapper">
        <h3 className="feature-heading-medium">{heading}</h3>
      </div>
      <div className="features-text-wrapper">
        <p className="text-size-regular">{text}</p>
      </div>
      <div className="read-more">
        <div className="margin-right margin-xsmall">
          <div className="text-size-small-2">Read more</div>
        </div>
        <div className="arrow-icon w-embed">
          <svg height="100%" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z" fill="currentcolor" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Feature;
