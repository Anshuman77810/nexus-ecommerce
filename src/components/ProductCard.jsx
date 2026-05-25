import { Link } from 'react-router-dom';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button 
            className={`btn add-to-cart-btn ${isAdded ? 'btn-success' : 'btn-primary'}`} 
            onClick={handleAddToCart}
            style={{ color: isAdded ? 'white' : '#000000', backgroundColor: isAdded ? 'var(--success-color)' : 'var(--primary-color)' }}
          >
            {isAdded ? <><Check size={18} /> Added!</> : <><ShoppingCart size={18} /> Add to Cart</>}
          </button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </Link>
    </motion.div>
  );
};

export default ProductCard;
