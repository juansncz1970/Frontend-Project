import React from 'react';

function Contact() {
  return (
    <div id="contact" className="section contact-section">
      <div className="image-container">
        <img src="contact.png" alt="Contact me" className="profile-image" />
      </div>
      <div className="content-container">
        <h1>Contact Me</h1>
        <p>
          I’d love to hear from you! Whether you want to collaborate on a creative project, discuss tech ideas, 
          or just share music recommendations, feel free to reach out. Let’s connect and explore ways to create 
          something awesome together!
        </p>
        <p>
          You can reach me through the following methods:
        </p>
        <ul>
          <li><strong>Email:</strong> yourname@example.com</li>
          <li><strong>Phone:</strong> +123 456 7890</li>
          <li><strong>LinkedIn:</strong> linkedin.com/in/your-profile</li>
          <li><strong>GitHub:</strong> github.com/your-profile</li>
        </ul>
        <p>
          I’m also active on creative platforms, so don’t hesitate to drop a message if you have ideas for 
          collaborations in photography, music, or any innovative tech project. Let’s build something amazing!
        </p>
      </div>
    </div>
  );
}

export default Contact;
