import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-company">
            <Link to="/" className="footer-logo">
              mono<span>.</span>
            </Link>
            <p className="footer-description">
              Elevating your lifestyle with premium products, exceptional quality, and unparalleled customer service.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">FB</a>
              <a href="#" className="social-icon" aria-label="Twitter">X</a>
              <a href="#" className="social-icon" aria-label="Instagram">IG</a>
              <a href="#" className="social-icon" aria-label="Youtube">YT</a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/blog">Our Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Customer Service</h4>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">Shipping & Returns</Link></li>
              <li><Link to="/tracking">Order Tracking</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Mono Avenue, Innovation City, NY 10012</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>support@mono.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mono Store. All rights reserved.</p>
          <div className="payment-methods">
            <span className="payment-icon">Visa</span>
            <span className="payment-icon">MasterCard</span>
            <span className="payment-icon">PayPal</span>
            <span className="payment-icon">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
