// src/pages/ProductsPage.js

import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

// --- Sample Product Data ---
const allProducts = [
  { id: 1, title: 'Thendral Herbal Soap', description: 'Nourishing herbal soap.', category: 'Beauty', image: 'https://via.placeholder.com/300x200?text=Herbal+Soap' },
  { id: 2, title: '16 Herbs Shika', description: 'Herbal hair wash powder.', category: 'Herbal Powders', image: 'https://via.placeholder.com/300x200?text=Herbal+Powder' },
  { id: 3, title: 'Multani Mitti Powder', description: 'Natural clay for skin.', category: 'Health Foods', image: 'https://via.placeholder.com/300x200?text=Multani+Mitti' },
  { id: 4, title: 'Eco-Friendly Cleaning Kit', description: 'Sustainable kit.', category: 'Organic Essentials', image: 'https://via.placeholder.com/300x200?text=Cleaning+Kit' },
  { id: 5, title: 'Natural Perfume', description: 'An elegant fragrance.', category: 'Perfumes', image: 'https://via.placeholder.com/300x200?text=Natural+Perfume' },
  { id: 6, title: 'Organic Face Mask', description: 'Rejuvenate your skin.', category: 'Beauty', image: 'https://via.placeholder.com/300x200?text=Face+Mask' },
  { id: 7, title: 'Ayurvedic Hair Oil', description: 'Strengthens hair roots.', category: 'Herbal Powders', image: 'https://via.placeholder.com/300x200?text=Hair+Oil' },
  { id: 8, title: 'Green Superfood Blend', description: 'Daily essential nutrients.', category: 'Health Foods', image: 'https://via.placeholder.com/300x200?text=Superfood' },
  { id: 9, title: 'Bamboo Toothbrush Set', description: 'Sustainable oral care.', category: 'Organic Essentials', image: 'https://via.placeholder.com/300x200?text=Toothbrush' },
];

// --- Categories (matching the image) ---
const categories = [
  'Beauty',
  'Herbal Powders',
  'Health Foods',
  'Organic Essentials',
  'Perfumes',
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to the first category
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on the active category
    const productsToShow = allProducts.filter(
      (product) => product.category === activeCategory
    );
    setFilteredProducts(productsToShow);
  }, [activeCategory]); // Re-run when activeCategory changes

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="products-heading">Our Products</h1>

        {/* Category Filters */}
        <div className="products-categories-filter">
          {categories.map((category) => (
            <span
              key={category}
              className={`category-filter-item ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;