// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, title, description, price }) => { // Added description back
  return (
    <Link to={`/products/${id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image-wrapper">
          <img
            src={image}
            alt={title}
            className="product-image"
          />
        </div>
        <div className="product-content">
          <h3 className="product-title">{title}</h3>
          <p className="product-description">{description}</p> {/* Re-added description */}
          {price && <p className="product-price">${price}</p>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;