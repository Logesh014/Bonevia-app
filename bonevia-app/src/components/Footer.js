// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Import social icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
                {/* Add a new section for social media icons */}
                <div className="social-icons">
                    <a href="https://www.instagram.com/bonevia" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/bonevia" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon" />
                    </a>
                    <a href="https://www.twitter.com/bonevia" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                    </a>
                </div>
                <p className="footer-copyright">
                    © 2024 Bonevia. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;