import React from 'react';
import { Link } from 'react-router-dom';
import './InternshipWrapper.css'; // Import your CSS file

const InternshipWrapper = () => {
  return (
    <div className="internship-wrapper">
      <div className="category">
        <Link to="/internship/fresher" className="category-link">
          Fresher (1st Year)
        </Link>
      </div>
      <div className="category">
        <Link to="/internship/sophomore" className="category-link">
          Sophomore (2nd Year)
        </Link>
      </div>
      <div className="category">
        <Link to="/internship/junior" className="category-link">
          Junior (3rd Year)
        </Link>
      </div>
      <div className="category">
        <Link to="/internship/senior" className="category-link">
          Senior (Final Year)
        </Link>
      </div>
    </div>
  );
};

export default InternshipWrapper;
