import React from 'react';
import './certificateVerify.css'; // Make sure to create and import the CSS file

const CertificateVerify = () => {
  return (
    <div className="certificate-verify-container">
      <h1 className="verify-heading">Verify Your Global Intern Certificate</h1>
      <div className="verify-box">
        <input
          type="text"
          placeholder="Enter Certificate Code or Email ID"
          className="verify-input"
        />
        <button className="verify-button">Search</button>
      </div>
    </div>
  );
};

export default CertificateVerify;
