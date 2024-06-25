import React from 'react';
import './featureWrapper.css';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="48" height="48">
        <path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
      </svg>
    ),
    heading: 'Streamlined Internships',
    text: 'Participate in Web Dev, App Dev, Full Stack, ML, and Data Science; focused learning.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
      </svg>
    ),
    heading: 'Expand Your Network',
    text: 'We prioritize networking to connect with fellow interns who share similar interests.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
    ),
    heading: 'Fostering Trust',
    text: 'We are dedicated to your success and provide a reliable platform for enriching learning experiences.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 0C92.7 0 64 28.7 64 64V288H19.2C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384H320V288H128V64H448V96h64V64c0-35.3-28.7-64-64-64H128zM512 128H400c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V256H544c-17.7 0-32-14.3-32-32V128zm32 0v96h96l-96-96z"/></svg>
    ),
    heading: 'Organized Learning',
    text: 'Experience growth-focused internships at Bharat Intern, designed for optimal skill enhancement.'
  }
];

const FeatureWrapper = () => {
  return (
    <div className="feature-content-wrapper">
      <div className="section-title">
        <div className="margin-bottom margin-xlarge">
          <h3 className="heading-large">Unlock Your Potential With Global Intern</h3>
        </div>
      </div>
      <div className="feature-wrapper">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icon-wrapper">
              {feature.icon}
            </div>
            <h3>{feature.heading}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureWrapper;
