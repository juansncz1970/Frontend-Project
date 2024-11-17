import React from 'react';

function Hobbies() {
  return (
    <div id="hobbies" className="section hobbies-section">
      <div className="image-container">
        <img src="hobby.jpg" alt="Hobbies" className="profile-image" />
      </div>
      <div className="content-container">
        <h1>Hobbies</h1>
        <p>
          When I’m not coding, I enjoy playing acoustic guitar and listening to rock music. I also like
          exploring the outdoors, reading, and engaging in creative projects. Hobbies like these help me
          stay inspired and think outside the box.
        </p>
        <button className="cta-button">Learn More →</button>
      </div>
    </div>
  );
}

export default Hobbies;
