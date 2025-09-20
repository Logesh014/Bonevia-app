// src/pages/ContactPage.js

import React from 'react';

const ContactPage = () => {
  // Styles to make the page look good without adding more CSS
  const pageStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 0',
    background: '#f9f9f9',
  };

  const containerStyles = {
    display: 'flex',
    background: '#fff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    maxWidth: '900px',
    width: '100%',
  };

  const formSectionStyles = {
    flex: 1,
    padding: '40px',
  };

  const mapSectionStyles = {
    flex: 1,
    background: `url('https://via.placeholder.com/450x550.png?text=Map+Goes+Here') no-repeat center center`,
    backgroundSize: 'cover',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <div style={formSectionStyles}>
          <h2>Contact Us</h2>
          <p>We're here to help! Reach out with any questions or feedback.</p>
          <form>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" style={{width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px'}}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div style={mapSectionStyles}>
          {/* Map is displayed via background image */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;