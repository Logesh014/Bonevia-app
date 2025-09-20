// src/pages/ProductsPage.js

import React from 'react';
import ProductCard from '../components/ProductCard';

// 1. ADD A UNIQUE 'id' TO EACH PRODUCT
const allProducts = [
  { id: 1, image: '/images/radiant-serum.png', title: 'Radiant Skin Serum', description: 'Revitalize your skin with our natural serum.'},
  { id: 2, image: '/images/herbal-detox.png', title: 'Herbal Detox Blend', description: 'Support your body\'s natural cleansing process.'},
  { id: 3, image: '/images/chia-seeds.png', title: 'Organic Chia Seeds', description: 'Boost your nutrition with these organic seeds.'},
  { id: 4, image: '/images/cleaning-kit.png', title: 'Eco-Friendly Cleaning Kit', description: 'Clean your home with our sustainable kit.'},
  { id: 5, image: '/images/thendral-soap.png', title: 'Thendral Herbal Soap', description: 'A refreshing and cleansing herbal soap bar.'},
  { id: 6, image: '/images/herbal-powder.png', title: 'Herbal Powder', description: 'A blend of natural herbs for health and wellness.'},
  { id: 7, image: '/images/turmeric.png', title: 'Turmeric', description: 'Organic turmeric powder with anti-inflammatory properties.'},
  { id: 8, image: '/images/natural-perfume.png', title: 'Natural Perfume', description: 'An elegant, all-natural fragrance.'},
];

const ProductsPage = () => {
  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Products</h1>
      <div className="product-grid">
        {allProducts.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id} // <-- 2. PASS THE ID TO THE PRODUCT CARD
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;