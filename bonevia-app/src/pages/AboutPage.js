// src/pages/AboutPage.js

import React from 'react';

const AboutPage = () => {
  // Simple inline styles for demonstration
  const pageStyles = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    lineHeight: '1.6',
  };

  const h1Styles = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const h2Styles = {
    marginTop: '40px',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
  };

  return (
    <div style={pageStyles}>
      <h1 style={h1Styles}>Our Story</h1>
      <p>
        Bonevia was born from a deep-seated passion for natural wellness and a commitment to sustainable living. Our journey began with a simple belief: that the best ingredients come from nature, and that our health and the health of our planet are intertwined.
      </p>

      <h2 style={h2Styles}>Our Philosophy</h2>
      <p>
        At Bonevia, we believe in the power of nature to nourish and heal. Our philosophy is rooted in transparency, integrity, and a deep respect for the environment. We carefully select each ingredient, ensuring it meets our rigorous standards for purity, potency, and sustainability.
      </p>

      <h2 style={h2Styles}>Ethical Practices</h2>
      <p>
        Our commitment to ethical practices extends beyond our ingredients. We partner with suppliers who share our values, ensuring fair labor practices and responsible sourcing. We prioritize eco-friendly packaging, minimize waste in our production processes, and actively support initiatives that promote environmental conservation.
      </p>
    </div>
  );
};

export default AboutPage;