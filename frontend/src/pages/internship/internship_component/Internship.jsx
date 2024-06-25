// InternshipCategory.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const InternshipCategory = () => {
  const { category } = useParams();

  let categoryInfo;
  switch (category) {
    case 'fresher':
      categoryInfo = {
        heading: 'Fresher Internships',
        description: 'Internships for 1st year grads',
        internships: ['Web Development Basic', 'Full Stack Development', 'Android Development', 'Machine Learning', 'Data Science']
      };
      break;
    case 'sophomore':
      categoryInfo = {
        heading: 'Sophomore Internships',
        description: 'Internships for 2nd year grads',
        internships: ['Web Development Advanced', 'Frontend Development', 'Backend Development', 'iOS Development', 'Artificial Intelligence']
      };
      break;
    case 'junior':
      categoryInfo = {
        heading: 'Junior Internships',
        description: 'Internships for 3rd year grads',
        internships: ['Cloud Computing', 'Cybersecurity', 'Software Engineering', 'DevOps', 'Big Data']
      };
      break;
    case 'senior':
      categoryInfo = {
        heading: 'Senior Internships',
        description: 'Internships for final year grads',
        internships: ['Blockchain Development', 'UI/UX Design', 'Game Development', 'Quantum Computing', 'Augmented Reality']
      };
      break;
    default:
      categoryInfo = {
        heading: 'Internships',
        description: 'Select a category to view internships',
        internships: []
      };
  }

  return (
    <div className="internship-category">
      <h2>{categoryInfo.heading}</h2>
      <p>{categoryInfo.description}</p>
      <ul className="internship-list">
        {categoryInfo.internships.map((internship, index) => (
          <li key={index}>{internship}</li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipCategory;
