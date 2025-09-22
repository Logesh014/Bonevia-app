// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import OurStory from '../components/OurStory';
import { useSearch } from '../context/SearchContext';

/* ==== Import Product Images ==== */
import serumImg from '../assets/product-serum.png';
// import detoxImg from '../assets/images/herbal-detox.png';   // ❌ Not used now
// import chiaImg from '../assets/images/chia-seeds.png';      // ❌ Not used now
// import cleaningImg from '../assets/images/cleaning-kit.png';// ❌ Not used now
// import perfumeImg from '../assets/images/natural-perfume.png'; // ❌ Not used now

/* ==== Import Category Icons ==== */
// import beautyIcon from '../assets/images/category-beauty.png';      // ❌ Not used now
// import herbalIcon from '../assets/images/category-herbal.png';      // ❌ Not used now
// import healthIcon from '../assets/images/category-health.png';      // ❌ Not used now
// import essentialsIcon from '../assets/images/category-essentials.png'; // ❌ Not used now
// import perfumesIcon from '../assets/images/category-perfumes.png';  // ❌ Not used now

/* ==== Import Hero Banner ==== */
import heroBanner from '../assets/hero-background.jpg';

const allProducts = [
  {
    id: 1,
    price: 29.99,
    image: serumImg,
    title: 'Radiant Skin Serum',
    description: 'Revitalize your skin.',
    category: 'Beauty',
  },
  // ❌ Future products can be added here when images are available
  // { id: 2, price: 19.99, image: detoxImg, title: 'Herbal Detox Blend', ... }
];

const categories = [
  { name: 'Beauty', icon: serumImg }, // ✅ temporary, reusing serum image
  // ❌ Uncomment and replace with actual category icons later
  // { name: 'Herbal Powders', icon: herbalIcon },
  // { name: 'Health Foods', icon: healthIcon },
  // { name: 'Organic Essentials', icon: essentialsIcon },
  // { name: 'Perfumes', icon: perfumesIcon },
];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('Beauty');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    let currentProducts = allProducts.filter(
      (product) => product.category === activeCategory
    );
    if (searchTerm) {
      currentProducts = currentProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(currentProducts);
  }, [searchTerm, activeCategory]);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBanner})` }} // ✅ Hero background in use
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Embrace Nature's Essence</h1>
            <p>
              Discover our curated collection of health, beauty, and organic
              products, crafted with care for you and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-products container">
        <h2>Featured Categories</h2>
        <div className="featured-categories-list">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`category-item ${
                activeCategory === category.name ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <img src={category.icon} alt={category.name} className="category-icon" />
              <p>{category.name}</p>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <p>No products found for your search.</p>
          )}
        </div>
      </section>

      {/* Our Story */}
      <OurStory />
    </div>
  );
};

export default HomePage;

//USE THIS CODE FOR IMPLEMENTING PHOTOS IN FEAUTURED CATEGERIES

// src/pages/HomePage.js

// import React, { useState, useEffect } from 'react';
// import ProductCard from '../components/ProductCard';
// import OurStory from '../components/OurStory';
// import { useSearch } from '../context/SearchContext';
// import './HomePage.css';

// /* ==== Import Product Images ==== */
// import serumImg from '../assets/products/serum.png';
// import detoxImg from '../assets/products/detox.png';
// import chiaImg from '../assets/products/chia.png';
// import cleaningImg from '../assets/products/cleaning.png';
// import perfumeImg from '../assets/products/perfume.png';

// /* ==== Import Category Icons ==== */
// import beautyIcon from '../assets/categories/beauty.png';
// import herbalIcon from '../assets/categories/herbal.png';
// import healthIcon from '../assets/categories/health.png';
// import essentialsIcon from '../assets/categories/essentials.png';
// import perfumesIcon from '../assets/categories/perfumes.png';

// /* ==== Import Hero Banner ==== */
// import heroBanner from '../assets/hero-background.jpg';

// /* ==== Products Data ==== */
// const allProducts = [
//   {
//     id: 1,
//     price: 29.99,
//     image: serumImg,
//     title: 'Radiant Skin Serum',
//     description: 'Revitalize your skin with our natural serum.',
//     category: 'Beauty',
//   },
//   {
//     id: 2,
//     price: 19.99,
//     image: detoxImg,
//     title: 'Herbal Detox Blend',
//     description: 'Support your body’s natural balance.',
//     category: 'Herbal Powders',
//   },
//   {
//     id: 3,
//     price: 14.99,
//     image: chiaImg,
//     title: 'Organic Chia Seeds',
//     description: 'Boost your nutrition with organic chia.',
//     category: 'Health Foods',
//   },
//   {
//     id: 4,
//     price: 24.99,
//     image: cleaningImg,
//     title: 'Eco-Friendly Cleaning Kit',
//     description: 'Clean your home with eco-friendly products.',
//     category: 'Organic Essentials',
//   },
//   {
//     id: 5,
//     price: 39.99,
//     image: perfumeImg,
//     title: 'Natural Perfume',
//     description: 'A refreshing fragrance from nature.',
//     category: 'Perfumes',
//   },
// ];

// /* ==== Categories Data ==== */
// const categories = [
//   { name: 'Beauty', icon: beautyIcon },
//   { name: 'Herbal Powders', icon: herbalIcon },
//   { name: 'Health Foods', icon: healthIcon },
//   { name: 'Organic Essentials', icon: essentialsIcon },
//   { name: 'Perfumes', icon: perfumesIcon },
// ];

// const HomePage = () => {
//   const [activeCategory, setActiveCategory] = useState('Beauty');
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const { searchTerm } = useSearch();

//   useEffect(() => {
//     let currentProducts = allProducts.filter(
//       (product) => product.category === activeCategory
//     );
//     if (searchTerm) {
//       currentProducts = currentProducts.filter((product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     setFilteredProducts(currentProducts);
//   }, [searchTerm, activeCategory]);

//   return (
//     <div className="homepage">
//       {/* Hero Section */}
//       <section
//         className="hero"
//         style={{ backgroundImage: `url(${heroBanner})` }}
//       >
//         <div className="hero-overlay">
//           <div className="hero-content">
//             <h1>Embrace Nature's Essence</h1>
//             <p>
//               Discover our curated collection of health, beauty, and organic
//               products, crafted with care for you and the planet.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Categories */}
//       <section className="featured-products container">
//         <h2>Featured Categories</h2>
//         <div className="featured-categories-list">
//           {categories.map((category) => (
//             <div
//               key={category.name}
//               className={`category-item ${
//                 activeCategory === category.name ? 'active' : ''
//               }`}
//               onClick={() => setActiveCategory(category.name)}
//             >
//               <img
//                 src={category.icon}
//                 alt={category.name}
//                 className="category-icon"
//               />
//               <p>{category.name}</p>
//             </div>
//           ))}
//         </div>

//         {/* Product Grid */}
//         <div className="product-grid">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <ProductCard key={product.id} {...product} />
//             ))
//           ) : (
//             <p>No products found for your search.</p>
//           )}
//         </div>
//       </section>

//       {/* Our Story */}
//       <OurStory />
//     </div>
//   );
// };

// export default HomePage;

