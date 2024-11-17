import React from 'react';

function About() {
  return (
    <div id="about" className="section about-section">
      <div className="image-container">
        <img src="about.jpg" alt="About me" className="profile-image" />
      </div>
      <div className="content-container">
        <h1>About Me</h1>
        <p>
          I’m passionate about technology, AI, and robotics. As a Computer Science student, I focus on
          leveraging tech to solve real-world problems. Outside of school, I enjoy exploring new ideas,
          reading about advancements in tech, and collaborating on innovative projects.
        </p>
        <button className="cta-button">Learn More →</button>
      </div>
    </div>
  );
}

export default About;
