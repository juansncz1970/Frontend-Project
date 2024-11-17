import React from 'react';

function Contact() {
  return (
    <div id="contact" className="section contact-section">
      <div className="image-container">
        <img src="contact.jpg" alt="Contact" className="profile-image" />
      </div>
      <div className="content-container">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out to me for any inquiries, collaborations, or just to say hello! You can
          contact me through the following methods:
        </p>
        <ul>
          <li>Email: example@domain.com</li>
          <li>Phone: +123 456 7890</li>
          <li>LinkedIn: linkedin.com/in/your-profile</li>
        </ul>
        <button className="cta-button">Learn More →</button>
      </div>
    </div>
  );
}

export default Contact;
