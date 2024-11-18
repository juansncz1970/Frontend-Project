import React from 'react';

function About() {
  return (
    <div id="about" className="section about-section">
      <div className="image-container">
        <img src="about.png" alt="About me" className="profile-image" />
      </div>
      <div className="content-container">
        <h1>About Me</h1>

        <h2>Introduction</h2>
        <p>
          Hi, I’m Juan, a Computer Science student with a passion for coding, music, and creativity. My journey into tech began with a simple C++ program, and from there, I’ve expanded into backend development and SQL, always seeking projects that challenge me to grow.
        </p>

        <h2>Music & Creativity</h2>
        <p>
          When I’m not coding, you’ll find me playing guitar, blending reggae rhythms with nu metal. Linkin Park’s *Hybrid Theory* inspired me to pick up the guitar, and music has been my constant companion ever since. I also enjoy sketching, experimenting with digital art, and watching sci-fi series or AI documentaries.
        </p>

        <h2>My Mantra</h2>
        <p>
          My mantra is: “Stay curious and keep creating.” Whether debugging code or crafting music, curiosity drives me, and creativity leaves its mark.
        </p>

        <h2>Future Goals</h2>
        <p>
          In the future, I aim to master backend development and solve meaningful problems through innovative projects. I also dream of collaborating with musicians to fuse my reggae roots with rock influences.
        </p>

        <h2>Fun Facts</h2>
        <p>
          Fun fact: I’m great at solving Rubik’s cubes (it’s like debugging for colors!) and I have an unexpected expertise in piercing care—comes with the territory!
        </p>
      </div>
    </div>
  );
}

export default About;
