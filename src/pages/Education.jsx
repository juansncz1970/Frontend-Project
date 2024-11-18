import React from 'react';

function Education() {
  return (
    <div id="education" className="section education-section">
      <div className="image-container centered-image">
        <img src="education.png" alt="Education" className="profile-image large-image" />
      </div>
      <div className="content-container left-align">
        {/* Heading Box */}
        <div className="heading-box">
          <h1>Education</h1>
        </div>

        {/* Content Sections */}
        <div className="custom-card">
          <h2>Specific Achievements</h2>
          <p>
            I’m proud to have been a national awardee, recognized as the champion of the HUSAY NG SOKSAY 2022 competition by UPLB for mobile phone photography and photo essay/journalism. It’s a milestone that reflects my ability to combine creativity with storytelling.
          </p>

          <h2>Key Areas of Interest</h2>
          <p>
            Within Computer Science, I’m particularly interested in backend development, software design, and data management. I’ve been diving deeper into SQL and exploring the intricacies of databases, which I find both challenging and rewarding.
          </p>

          <h2>Extracurricular Involvement</h2>
          <p>
            I’m a former member of the S7s Publication team in the Naga College Foundation Inc. ROTC department, where I contribute my skills to create meaningful content. This role has helped me sharpen my communication and teamwork abilities.
          </p>

          <h2>Future Educational Goals</h2>
          <p>
            I’m aiming to enhance my expertise with certifications in backend development and database management. I also plan to explore fields like artificial intelligence and data analysis to broaden my skill set.
          </p>

          <h2>Learning Philosophy</h2>
          <p>
            I believe in hands-on learning and self-driven exploration. Whether it’s coding or photography, I thrive on tackling real-world projects and collaborating with others to share ideas and learn from different perspectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
