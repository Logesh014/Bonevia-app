// src/pages/ContactPage.js

import React from "react";


const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Contact Form */}
      <h2>Contact Us</h2>
      <p>We’re here to help! Reach out with any questions or feedback.</p>

      <form className="contact-form">
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <textarea rows="5" placeholder="Your message"></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Map */}
      <iframe
        className="contact-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019157637911!2d-122.41941548468152!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814c5f4c9b7b%3A0x4e4fef2ef6e2f9f9!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1632333600000!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
