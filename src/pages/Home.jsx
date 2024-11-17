import React from 'react';

function Home({ onLearnMoreClick }) {
  return (
    <div id="home">
      <section className="section">
        <div className="image-container">
          <img src="profile.png" alt="Profile" className="profile-image" />
        </div>
        <div className="content-container">
          <h1>Welcome to My Website</h1>
          <p>Learn more about my work, education, and hobbies.</p>
          <button className="cta-button" onClick={onLearnMoreClick}>
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
