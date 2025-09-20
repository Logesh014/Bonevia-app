// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom'; // 1. Make sure Link is imported

const ProductCard = ({ id, image, title, description }) => {
  // 2. We wrap the entire card content in a <Link> component.
  // The 'to' prop creates the unique URL, like '/products/1'.
  return (
    <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;