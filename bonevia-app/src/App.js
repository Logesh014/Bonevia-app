// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

// Import all your pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';   // <-- MAKE SURE THIS IS IMPORTED
import TermsOfServicePage from './pages/TermsOfServicePage'; // <-- MAKE SURE THIS IS IMPORTED

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Auth Pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Footer Pages */}
          <Route path="/privacy" element={<PrivacyPolicyPage />} />     {/* <-- MAKE SURE THIS ROUTE EXISTS */}
          <Route path="/terms" element={<TermsOfServicePage />} />       {/* <-- MAKE SURE THIS ROUTE EXISTS */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;