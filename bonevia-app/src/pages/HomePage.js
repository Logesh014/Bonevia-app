// src/pages/HomePage.js

import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearch } from '../context/SearchContext';

const allProducts = [
    { id: 1, price: 29.99, image: '/images/radiant-serum.png', title: 'Radiant Skin Serum', description: 'Revitalize your skin.', category: 'Beauty' },
    { id: 2, price: 19.99, image: '/images/herbal-detox.png', title: 'Herbal Detox Blend', description: 'Natural cleansing process.', category: 'Herbal Powders' },
    { id: 3, price: 9.99, image: '/images/chia-seeds.png', title: 'Organic Chia Seeds', description: 'Boost your nutrition.', category: 'Health Foods' },
    { id: 4, price: 49.99, image: '/images/cleaning-kit.png', title: 'Eco-Friendly Cleaning Kit', description: 'Sustainable kit.', category: 'Organic Essentials' },
    { id: 8, price: 59.99, image: '/images/natural-perfume.png', title: 'Natural Perfume', description: 'An elegant fragrance.', category: 'Perfumes' },
];

const categories = [
    { name: 'Beauty', icon: '/images/category-beauty.png' },
    { name: 'Herbal Powders', icon: '/images/category-herbal.png' },
    { name: 'Health Foods', icon: '/images/category-health.png' },
    { name: 'Organic Essentials', icon: '/images/category-essentials.png' },
    { name: 'Perfumes', icon: '/images/category-perfumes.png' },
];

const HomePage = () => {
    const [activeCategory, setActiveCategory] = useState('Beauty');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { searchTerm } = useSearch();

    useEffect(() => {
        let currentProducts = allProducts;

        // Filter by category
        currentProducts = currentProducts.filter(product => product.category === activeCategory);

        // Filter by search term
        if (searchTerm) {
            currentProducts = currentProducts.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(currentProducts);
    }, [searchTerm, activeCategory]);

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Embrace Nature's Essence</h1>
                    <p>
                        Discover our curated collection of health, beauty, and organic products,
                        crafted with care for you and the planet.
                    </p>
                </div>
            </section>
            
            {/* Featured Products and Categories Section */}
            <section className="featured-products container">
                {/* Heading + Categories in one row */}
                <div className="featured-header">
                    <h2 className="featured-heading">Featured Categories</h2>
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
                </div>

                {/* Product Grid */}
                <div className="product-grid">
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
                        <p>No products found for your search.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
