// src/pages/ProductDetailPage.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons for expand/collapse

// 1. UPDATE YOUR DATA TO INCLUDE AN 'images' ARRAY AND 'faqs' ARRAY
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
    ],
    // Add FAQ data to the product
    faqs: [
      { id: 1, question: 'How do I use this product?', answer: 'Apply a small amount to clean, damp skin. Gently massage in an upward motion until fully absorbed.' },
      { id: 2, question: 'What are the ingredients?', answer: 'Our serum is made with organic aloe vera, vitamin E, rosehip oil, and a blend of natural essential oils.' }
    ],
    reviews: [ // Added a reviews array to your product data
        { id: 1, author: 'Olivia Harper', rating: 4, comment: 'This herbal powder is amazing! I\'ve been using it in my smoothies, and I feel so much more energized.' },
        { id: 2, author: 'Ethan Walker', rating: 5, comment: 'Good quality product. I\'ve noticed a difference in my skin. It\'s smoother and has a healthy glow.' },
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
    ],
    faqs: [
      { id: 1, question: 'How do I prepare the blend?', answer: 'Mix one teaspoon of the blend with warm water or your favorite smoothie once a day.' },
      { id: 2, question: 'Is it safe for daily use?', answer: 'Yes, our blend is designed for daily use to support your body\'s natural functions.' }
    ],
    reviews: [ // Added a reviews array to your product data
        { id: 3, author: 'Sophia Chen', rating: 5, comment: 'I love this detox blend! The taste is great, and I feel less bloated after just a week of use.' },
        { id: 4, author: 'Liam Davis', rating: 4, comment: 'Good quality, but the packaging could be better. The product itself is excellent.' },
    ]
  },
  // Add other products to this array
];

// New FaqItem component to handle the accordion functionality
const FaqItem = ({ faq, isOpen, onClick }) => (
  <div className="faq-item" onClick={onClick}>
    <div className="faq-question">
      <span>{faq.question}</span>
      {isOpen ? <FaMinus className="faq-icon" /> : <FaPlus className="faq-icon" />}
    </div>
    {isOpen && <div className="faq-answer">{faq.answer}</div>}
  </div>
);

// New component for the review form (re-included for completeness)
const ReviewForm = ({ onReviewSubmit }) => {
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!author || !rating || !comment) {
            alert("Please fill in all fields.");
            return;
        }
        const newReview = {
            id: Date.now(),
            author,
            rating,
            comment,
        };
        onReviewSubmit(newReview);
        setAuthor('');
        setRating(0);
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <h3>Write a Review</h3>
            <div className="input-group">
                <label htmlFor="author">Your Name</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="rating">Rating</label>
                <select id="rating" value={rating} onChange={(e) => setRating(Number(e.target.value))} required>
                    <option value="0">Select a rating</option>
                    <option value="5">★★★★★</option>
                    <option value="4">★★★★☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="1">★☆☆☆☆</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="comment">Your Review</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
    );
};


const ProductDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedVariant, setSelectedVariant] = useState('50g (Pack of 1)');
    const [openFaq, setOpenFaq] = useState(null);
    const [productData, setProductData] = useState(allProducts.find(p => p.id === parseInt(id)));

    useEffect(() => {
        if (productData) {
            setSelectedImage(productData.images[0]);
        }
    }, [productData]);

    if (!productData) { return <div>Product not found!</div>; }

    const handleAddToCart = () => {
        addToCart({ ...productData, selectedVariant });
        alert(`${productData.title} has been added to your cart!`);
    };

    const handlePlaceOrder = () => {
        addToCart({ ...productData, selectedVariant });
    };

    const handleReviewSubmit = (newReview) => {
        setProductData(prevProduct => ({
            ...prevProduct,
            reviews: [newReview, ...prevProduct.reviews]
        }));
        alert("Review submitted successfully!");
    };

    // Helper function to render star rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} style={{ color: '#ffc107' }}>★</span>);
            } else {
                stars.push(<span key={i} style={{ color: '#e4e5e9' }}>★</span>);
            }
        }
        return stars;
    };

    return (
        <div className="container product-detail-page">
            <div className="product-detail-layout">
                <div className="product-images-container">
                    <div className="product-thumbnails">
                        {productData.images.map((imgSrc, index) => (
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
                        <img src={selectedImage} alt={productData.title} />
                    </div>
                </div>
                <div className="product-details-container">
                    <h2>{productData.title}</h2>
                    <p className="product-rating">★★★★☆ (1,560)</p>
                    <p className="product-price">₹ {productData.price}</p>
                    <div className="product-actions">
                        <button onClick={handleAddToCart} className="btn-add-to-cart">Add to Cart</button>
                        <Link to="/checkout" className="btn-place-order" onClick={handlePlaceOrder}>
                            Place Order
                        </Link>
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
                        <p>{productData.description}</p>
                        <h4>Item Used</h4>
                        <ul>
                            <li>Manjal</li>
                            <li>Manjal</li>
                        </ul>
                    </div>
                    <div className="faq-section">
                        <h3>Frequently Asked Questions</h3>
                        {productData.faqs.map((faq) => (
                            <FaqItem
                                key={faq.id}
                                faq={faq}
                                isOpen={openFaq === faq.id}
                                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                            />
                        ))}
                    </div>
                    <div className="reviews-section">
                        <h3>Customer Reviews</h3>
                        {productData.reviews.map(review => (
                            <div key={review.id} className="review">
                                <p className="review-author">{review.author} {renderStars(review.rating)}</p>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                        <ReviewForm onReviewSubmit={handleReviewSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;