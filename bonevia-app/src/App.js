// src/App.js

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { SearchProvider } from './context/SearchContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

// Import all pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import OrdersPage from './pages/OrdersPage';
import SettingsPage from './pages/SettingsPage';
import LogoutPage from './pages/LogoutPage';
import BlogPostPage from './pages/BlogPostPage';
import OurStory from './components/OurStory';

function App() {
  return (
    <Router>
      <AuthProvider>
        <SearchProvider>
          <CartProvider>
            <Layout>
              <Routes>
                {/* Login page is the first/default page */}
                <Route path="/" element={<LoginPage />} />

                {/* Signup page */}
                <Route path="/signup" element={<SignUpPage />} />

                {/* Other pages */}
                <Route path="/home" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/about" element={<OurStory />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<PaymentPage />} />
                <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/logout" element={<LogoutPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
              </Routes>
            </Layout>
          </CartProvider>
        </SearchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
