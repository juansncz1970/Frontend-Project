import React from 'react';

function Education() {
  return (
    <div id="education" className="section education-section">
      <div className="image-container">
        <img src="education.jpg" alt="Education" className="profile-image" />
      </div>
      <div className="content-container">
        <h1>Education</h1>
        <p>
          I am currently pursuing my degree in Computer Science, focusing on software development and AI.
          I have completed projects related to data structures, algorithms, and AI, and have been involved
          in several tech-related extracurricular activities.
        </p>
        <button className="cta-button">Learn More →</button>
      </div>
    </div>
  );
}

export default Education;
