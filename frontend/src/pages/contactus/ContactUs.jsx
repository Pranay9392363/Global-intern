import React from 'react';
import './contactUs.css'; // Make sure to create and import the CSS file

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>
          For any inquiries or to learn more about our services, please contact us using the information below.
        </p>
        <ul className="contact-list">
          <li><strong>Email:</strong> <a href="mailto:contact@globalintern.com">contact@globalintern.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a></li>
          <li><strong>Address:</strong> Bhopal, Madhya Pradesh, India</li>
        </ul>
      </div>
      <div className="map-container">
        {/* Replace with your map embed code or component */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.1134582590227!2d77.40602631498276!3d23.264532484783034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397e40a3652b2e53%3A0x73bcb882d23cc840!2sBhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1624988120781!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
