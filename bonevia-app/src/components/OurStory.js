// src/components/OurStory.js
import React from 'react';

const OurStory = () => {
  return (
    <section className="our-story container">
      {/* Main Title */}
      <h2>Our Story</h2>
      <p>
        At Bonevia, we believe in the power of nature to nurture and heal. Our journey began with
        a simple idea: to create products that are not only effective but also kind to the planet.
      </p>

      {/* Intro Image Section (two bottles) */}
      <div className="story-image full-width">
        <img src="/images/our-story.png" alt="Our Story Products" />
      </div>

      {/* Philosophy Section */}
      <div className="story-section">
        <div className="story-text">
          <h3>Our Philosophy</h3>
          <p>
            Every product is designed to enhance your natural well-being with local ingredients
            sourced responsibly. We value transparency, integrity, and sustainability.
          </p>
        </div>
        <div className="story-image">
          <img src="/images/philosophy.png" alt="Our Philosophy" />
        </div>
      </div>

      {/* Ethical Practices Section */}
      <div className="story-section reverse">
        <div className="story-text">
          <h3>Ethical Practices</h3>
          <p>
            Our commitment extends to ethical treatment of workers, cruelty-free testing,
            and eco-friendly packaging, ensuring our products are safe for both you and the planet.
          </p>
        </div>
        <div className="story-image">
          <img src="/images/ethical.png" alt="Ethical Practices" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
