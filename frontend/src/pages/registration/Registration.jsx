import React, { useState } from 'react';
import './registration.css'
import { useParams } from 'react-router-dom';

const RegistrationForm = () => {
  const { grade } = useParams(); // Extract grade from URL parameter

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phno: '',
    email: '',
    yearOfStudy: grade, // Use grade from URL parameter
    domain: 'Web Development Basic', // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="registration-form-container">
      <h2>Registration Form for {grade}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phno">Phone Number:</label>
          <input
            type="tel"
            id="phno"
            name="phno"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={formData.phno}
            onChange={handleChange}
            required
          />
          <small>Format: 123-456-7890</small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearOfStudy">Year of Study:</label>
          <select
            id="yearOfStudy"
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            disabled
          >
            <option value={grade}>{grade}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="domain">Domain:</label>
          <select
            id="domain"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            required
          >
            <option value="Web Development Basic">Web Development Basic</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Android Development">Android Development</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
