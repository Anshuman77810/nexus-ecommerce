import { Hexagon, Globe, MessageSquare, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Hexagon className="logo-icon" />
            <span>Nexus</span>
          </div>
          <p className="footer-description">
            Elevating your digital experience with premium tech gear and accessories.
          </p>
        </div>
        
        <div className="footer-links-group">
          <h3>Shop</h3>
          <a href="#">Audio</a>
          <a href="#">Peripherals</a>
          <a href="#">Displays</a>
          <a href="#">Wearables</a>
        </div>
        
        <div className="footer-links-group">
          <h3>Support</h3>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
        </div>
        
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><Globe size={20} /></a>
            <a href="#" className="social-icon"><MessageSquare size={20} /></a>
            <a href="#" className="social-icon"><Mail size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Nexus Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
