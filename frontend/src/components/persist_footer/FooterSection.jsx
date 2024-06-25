import React from 'react';
import './footerSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalInternLogo from '../persist_assets/globe_logo.png'; // Assuming this is your Global Intern logo
import { faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const FooterSection = () => {
  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1200" data-aos-once="false">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="/">
                  <img src={GlobalInternLogo} alt="Global Intern" width="130" />
                </a>
                <div className="logo-text">
                <h1>GLOBAL</h1>
                <div className="line"></div>
                <h1>INTERN</h1>
            </div>
              </div>
              <p>Empowering the next generation of tech leaders through hands-on internships in various fields.</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200" data-aos-once="false">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>
              <ul className="list">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/apply">Apply</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6" data-aos="fade-in" data-aos-delay="300" data-aos-duration="1200" data-aos-once="false">
            <div className="single-footer-widget">
              <h3>Follow Us</h3>
              <ul className="list">
                <li><a href="https://www.linkedin.com/company/bharat-intern/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                <li><a href="https://t.me/bharatintern" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /> Telegram</a></li>
                <li><a href="https://www.youtube.com/@BharatIntern" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200" data-aos-once="false">
            <div className="single-footer-widget">
              <h3>Contact</h3>
              <ul className="footer-contact-info">
                <li><FontAwesomeIcon icon={faMapPin} /> Bhopal, Madhya Pradesh, India</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:contact@globalintern.com">contact@globalintern.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>Copyright &copy; {new Date().getFullYear()} Global Intern. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
