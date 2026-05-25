import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Hexagon } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <Hexagon className="logo-icon" />
          <span>Nexus</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
        </div>

        <div className="nav-actions">
          <Link to="/cart" className="cart-icon-wrapper">
            <ShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          
          <button 
            className="mobile-menu-btn mobile-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu mobile-only animate-fade-in">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Shop</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
