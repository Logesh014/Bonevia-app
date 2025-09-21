// src/App.js

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

// Corrected import paths
import { SearchProvider } from './context/SearchContext';
import { CartProvider } from './context/CartContext';

// Import all your pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

// Import the new pages
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      {/* Wrap the entire app's content with the providers */}
      <SearchProvider>
        <CartProvider>
          <Layout>
            <Routes>
              {/* This is the corrected routing setup */}
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<PaymentPage />} />
              <Route path="/order-confirmation" element={<OrderConfirmationPage />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />

              {/* Add the new routes here */}
              <Route path="/search" element={<SearchPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </SearchProvider>
    </Router>
  );
}

export default App;