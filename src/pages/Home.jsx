import React from 'react';

function Home() {
  return (
    <div id="home">
      <section className="section">
        <div className="image-container">
          <img src="profile.png" alt="Profile" className="profile-image" />
        </div>
        <div className="content-container">
          <h1>Who is this Guy?</h1>
          <p>Hi! I'm John, a Computer Science student passionate about technology and music. I specialize in C++ and SQL, and I'm currently immersed in an exciting backend project that keeps me innovating and learning.</p>
          
          <p>Beyond coding, I’m a guitarist at heart, inspired by rock and nu metal bands like Slipknot and Linkin Park. Music fuels my creativity—whether it’s writing new riffs or enjoying powerful lyrics that resonate with me.</p>
          
          <p>What drives me? It’s all about dedication, creativity, and constant growth. I thrive on solving complex challenges, both in tech and music, and always push myself to reach new heights.</p>
          
          <p>If you're passionate about tech, music, or collaboration, feel free to reach out. Let's connect and create something amazing together!</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
