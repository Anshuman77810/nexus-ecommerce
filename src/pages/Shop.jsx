import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';
import './Shop.css';

const categories = ["All", ...new Set(products.map(p => p.category))];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <motion.div 
      className="shop-page container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="shop-header">
        <h1>Our <span className="text-gradient">Collection</span></h1>
        <p>Explore our full range of premium tech accessories.</p>
      </div>

      <div className="shop-controls">
        <div className="filters">
          <div className="filter-icon">
            <SlidersHorizontal size={20} />
          </div>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="results-count">
          Showing {filteredProducts.length} results
        </div>
      </div>

      <motion.div 
        className="products-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {filteredProducts.map(product => (
          <motion.div key={product.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Shop;
