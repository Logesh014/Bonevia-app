// src/pages/ProductDetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

// This data is needed here so the page can find the product details
const allProducts = [
    { id: 1, image: '/images/radiant-serum.png', title: 'Radiant Skin Serum', description: 'A revitalizing natural serum designed to give your skin a healthy and radiant glow. Made with the finest organic ingredients.'},
    { id: 2, image: '/images/herbal-detox.png', title: 'Herbal Detox Blend', description: 'Support your body\'s natural cleansing process with our specially formulated herbal detox blend.'},
    { id: 3, image: '/images/chia-seeds.png', title: 'Organic Chia Seeds', description: 'Boost your nutrition with these organic seeds.'},
    { id: 4, image: '/images/cleaning-kit.png', title: 'Eco-Friendly Cleaning Kit', description: 'Clean your home with our sustainable kit.'},
    { id: 5, image: '/images/thendral-soap.png', title: 'Thendral Herbal Soap', description: 'A refreshing and cleansing herbal soap bar.'},
    { id: 6, image: '/images/herbal-powder.png', title: 'Herbal Powder', description: 'A blend of natural herbs for health and wellness.'},
    { id: 7, image: '/images/turmeric.png', title: 'Turmeric', description: 'Organic turmeric powder with anti-inflammatory properties.'},
    { id: 8, image: '/images/natural-perfume.png', title: 'Natural Perfume', description: 'An elegant, all-natural fragrance.'},
];


const ProductDetailPage = () => {
  const { id } = useParams(); 
  const { addToCart } = useCart(); 
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div style={{ display: 'flex', gap: '40px' }}>
        <div style={{ flex: 1 }}>
          <img src={product.image} alt={product.title} style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h1>{product.title}</h1>
          <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6' }}>{product.description}</p>
          <button onClick={handleAddToCart} className="btn btn-primary" style={{ marginTop: '20px', padding: '15px 30px', fontSize: '1rem' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;