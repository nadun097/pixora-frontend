import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            {/* Row with Logo, Description, and Links */}
            <div className="footer-row">
                {/* Logo and Description */}
                <div className="footer-brand">
                    <img src="/src/assets/images/logo.png" alt="Pixora Logo" className="footer-logo" />
                    <p className="footer-description">
                        Pixora – A pixel-art NFT brand for digital collectibles and Web3 innovation.
                    </p>
                </div>

                {/* Links Section */}
                <div className="footer-links">
                    {/* Information Section */}
                    <div className="footer-column">
                        <h4>Information</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/press">Press / Media</a></li>
                        </ul>
                    </div>

                    {/* Legal & Compliance Section */}
                    <div className="footer-column">
                        <h4>Legal & Compliance</h4>
                        <ul>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/cookies">Cookie Policy</a></li>
                            <li><a href="/disclaimer">Disclaimer</a></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="footer-column">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/faqs">FAQs</a></li>
                            <li><a href="/help-center">Help Center</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="footer-divider" />

            {/* Social Media Section */}
            <div className="footer-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/src/assets/images/facebook_icon.png" alt="Facebook" className="social-icon-img" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/src/assets/images/linkedin_icon.png" alt="LinkedIn" className="social-icon-img" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/src/assets/images/twitter_icon.png" alt="Twitter" className="social-icon-img" />
                </a>
            </div>

            {/* Copyright Section */}
            <div className="footer-copyright">
                <p>© [ANIMI AUDITION] – All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;