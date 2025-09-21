import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { allProducts } from '../productData'; // <-- IMPORT FROM THE CENTRAL FILE

// 1. UPDATE YOUR DATA TO INCLUDE AN 'images' ARRAY
const allProducts = [
    { 
      id: 1, 
      price: 29.99, 
      title: 'Radiant Skin Serum', 
      description: 'A revitalizing natural serum designed to give your skin a healthy and radiant glow. Made with the finest organic ingredients.',
      images: [
        '/images/radiant-serum.png',
        '/images/radiant-serum-2.png',
        '/images/radiant-serum-3.png',
      ]
    },
    { 
      id: 2, 
      price: 19.99, 
      title: 'Herbal Detox Blend', 
      description: 'Support your body\'s natural cleansing process with our specially formulated herbal detox blend.',
      images: [
        '/images/herbal-detox.png',
        '/images/herbal-detox-2.png',
        '/images/herbal-detox-3.png',
      ]
    },
    // ... add 'images' arrays for your other products as well
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState('50g (Pack of 1)');
  const product = allProducts.find(p => p.id === parseInt(id));

  // 2. ADD STATE TO TRACK THE CURRENTLY DISPLAYED IMAGE
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product) { return <div>Product not found!</div>; }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} has been added to your cart!`);
  };

  const handlePlaceOrder = () => {
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="container product-detail-page">
      <div className="product-detail-layout">
        <div className="product-images-container">
          <div className="product-thumbnails">
            {/* 3. MAP OVER THE IMAGES ARRAY TO CREATE CLICKABLE THUMBNAILS */}
            {product.images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(imgSrc)}
                className={selectedImage === imgSrc ? 'thumbnail-image active' : 'thumbnail-image'}
              />
            ))}
          </div>
          <div className="product-main-image">
            {/* 4. DISPLAY THE SELECTED IMAGE */}
            <img src={selectedImage} alt={product.title} />
          </div>
        </div>
        <div className="product-details-container">
          <h2>{product.title}</h2>
          <p className="product-rating">★★★★☆ (1,560)</p>
          <p className="product-price">₹ {product.price}</p>
          <div className="product-actions">
            <button onClick={handleAddToCart} className="btn-add-to-cart">Add to Cart</button>
            <button onClick={handlePlaceOrder} className="btn-place-order">Place Order</button>
          </div>
          <div className="product-features">
            <span>✓ Free Delivery</span>
            <span>✓ 10 Days Returnable</span>
            <span>✓ Secure Transaction</span>
          </div>
          <div className="product-variants">
            <button 
                onClick={() => setSelectedVariant('50g (Pack of 1)')} 
                className={selectedVariant === '50g (Pack of 1)' ? 'variant-btn active' : 'variant-btn'}>
                50g (Pack of 1)
            </button>
            <button 
                onClick={() => setSelectedVariant('100g (Pack of 1)')} 
                className={selectedVariant === '100g (Pack of 1)' ? 'variant-btn active' : 'variant-btn'}>
                100g (Pack of 1)
            </button>
            <button 
                onClick={() => setSelectedVariant('1Kg (Pack of 1)')} 
                className={selectedVariant === '1Kg (Pack of 1)' ? 'variant-btn active' : 'variant-btn'}>
                1Kg (Pack of 1)
            </button>
          </div>
          <div className="product-description-section">
            <h3>Product Description</h3>
            <p>{product.description}</p>
            <h4>Item Used</h4>
            <ul>
              <li>Manjal</li>
              <li>Manjal</li>
            </ul>
          </div>
          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-item">How do I use this product? <span>+</span></div>
            <div className="faq-item">What are the ingredients? <span>+</span></div>
          </div>
          <div className="reviews-section">
            <h3>Customer Reviews</h3>
            <div className="review">
                <p className="review-author">Olivia Harper ★★★★☆</p>
                <p>This herbal powder is amazing! I've been using it in my smoothies, and I feel so much more energized.</p>
            </div>
            <div className="review">
                <p className="review-author">Ethan Walker ★★★★★</p>
                <p>Good quality product. I've noticed a difference in my skin. It's smoother and has a healthy glow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;