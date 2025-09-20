// src/pages/HomePage.js

import React from 'react';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    image: '/images/radiant-serum.png', // <-- See? Just a simple text link
    title: 'Radiant Skin Serum',
    description: 'Revitalize your skin with our natural serum.'
  },
  {
    id: 2,
    image: '/images/herbal-detox.png', // <-- Simple link
    title: 'Herbal Detox Blend',
    description: "Support your body's natural cleansing process."
  },
  {
    id: 3,
    image: '/images/chia-seeds.png', // <-- Simple link
    title: 'Organic Chia Seeds',
    description: 'Boost your nutrition with these organic seeds.'
  },
  {
    id: 4,
    image: '/images/cleaning-kit.png', // <-- Simple link
    title: 'Eco-Friendly Cleaning Kit',
    description: 'Clean your home with our sustainable kit.'
  }
];

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Embrace Nature's Essence</h1>
          <p>Discover our curated collection of health, beauty, and organic products, crafted with care for you and the planet.</p>
        </div>
      </section>

      <section className="featured-products container">
        <h2>Featured Categories</h2>
        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;