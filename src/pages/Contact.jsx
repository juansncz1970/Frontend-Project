import React from 'react';

function Contact() {
  return (
    <div id="contact" className="section contact-section">
      <div className="image-container centered-image">
        <img src="contact.png" alt="Contact me" className="profile-image large-image" />
      </div>
      <div className="content-container left-align">
        {/* Heading Box */}
        <div className="heading-box">
          <h1>Contact Me</h1>
        </div>

        {/* Content Sections */}
        <div className="custom-card">
         <h2>I’d love to hear from you!</h2>
          <p>
            Whether you want to collaborate on a creative project, discuss tech ideas, 
            or just share music recommendations, feel free to reach out. Let’s connect and explore ways to create 
            something awesome together!
          </p>
          <p>
            You can reach me through the following methods:
          </p>
          
            <p><strong>Email:</strong> yourname@example.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/your-profile</p>
            <p><strong>GitHub:</strong> github.com/your-profile</p>
          
          <p>
            
          </p>
          <p>
            I’m also active on creative platforms, so don’t hesitate to drop a message if you have ideas for 
            collaborations in photography, music, or any innovative tech project. Let’s build something amazing!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
