import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

// 1. Add a 'category' property to each product
const allProducts = [
  { id: 1, price: 29.99, image: '/images/radiant-serum.png', title: 'Radiant Skin Serum', description: 'Revitalize your skin.', category: 'Beauty' },
  { id: 2, price: 19.99, image: '/images/herbal-detox.png', title: 'Herbal Detox Blend', description: 'Natural cleansing process.', category: 'Herbal Powders' },
  { id: 3, price: 9.99, image: '/images/chia-seeds.png', title: 'Organic Chia Seeds', description: 'Boost your nutrition.', category: 'Health Foods' },
  { id: 4, price: 49.99, image: '/images/cleaning-kit.png', title: 'Eco-Friendly Cleaning Kit', description: 'Sustainable kit.', category: 'Organic Essentials' },
  // Add another product for the 'Perfumes' category for demonstration
  { id: 8, price: 59.99, image: '/images/natural-perfume.png', title: 'Natural Perfume', description: 'An elegant fragrance.', category: 'Perfumes' },
];

// 2. Update the categories data to include the image path for each icon
const categories = [
    { name: 'Beauty', icon: '/images/category-beauty.png' },
    { name: 'Herbal Powders', icon: '/images/category-herbal.png' },
    { name: 'Health Foods', icon: '/images/category-health.png' },
    { name: 'Organic Essentials', icon: '/images/category-essentials.png' },
    { name: 'Perfumes', icon: '/images/category-perfumes.png' },
];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('Beauty');

  // 3. Filter the products based on the active category
  const filteredProducts = allProducts.filter(product => product.category === activeCategory);

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

        <div className="featured-categories-list">
          {categories.map(category => (
            <div 
              key={category.name} 
              className={`category-item ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
            >
              <img src={category.icon} alt={category.name} className="category-icon" />
              <p>{category.name}</p>
            </div>
          ))}
        </div>

        {/* 4. Display the filtered list of products */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
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