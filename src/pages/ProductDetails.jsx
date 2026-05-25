import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container not-found">
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-primary">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div 
      className="product-details-page container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <button onClick={() => navigate(-1)} className="back-btn">
        <ArrowLeft size={20} /> Back
      </button>

      <div className="product-details-grid">
        <div className="product-image-large">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info-detailed">
          <div className="product-meta">
            <span className="category-badge">{product.category}</span>
          </div>
          
          <h1 className="product-title">{product.name}</h1>
          <div className="product-price-large">${product.price.toFixed(2)}</div>
          
          <p className="product-description">{product.description}</p>
          
          <div className="product-features">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}><ShieldCheck size={18} className="feature-icon" /> {feature}</li>
              ))}
            </ul>
          </div>

          <div className="purchase-actions">
            <button 
              className={`btn btn-large ${isAdded ? 'btn-success' : 'btn-primary'}`} 
              onClick={handleAddToCart}
            >
              {isAdded ? (
                <><Check size={20} /> Added to Cart</>
              ) : (
                <><ShoppingCart size={20} /> Add to Cart</>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
