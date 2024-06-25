import React from 'react';
import './governmentCollaboration.css';
import GovImage1 from '../persist_assets/gov_image1.png'; // Example paths, replace with actual image paths
import GovImage2 from '../persist_assets/gov_image2.png';
import GovImage3 from '../persist_assets/gov_image3.png';

const GovernmentCollaboration = () => {
  return (
    <div className="government-collaboration">
        <div className='gov'>
        <div className="gov-image-block">
        <img src={GovImage1} alt="Government Collaboration 1" />
      </div>
      <div className="gov-image-block">
        <img src={GovImage2} alt="Government Collaboration 2" />
      </div>
      <div className="gov-image-block">
        <img src={GovImage3} alt="Government Collaboration 3" />
      </div>
        </div>
      
    </div>
  );
};

export default GovernmentCollaboration;
