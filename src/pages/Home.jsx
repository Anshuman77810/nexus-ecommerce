import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="badge-pulse"></span> New Collection 2026
            </div>
            <h1 className="hero-title animate-slide-up" style={{ animationDelay: '0.2s' }}>
              The Future of <br/><span className="text-gradient">Technology</span>
            </h1>
            <p className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Discover premium gear designed to elevate your digital experience. Immerse yourself in uncompromising quality and aesthetics.
            </p>
            <div className="hero-actions animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/shop" className="btn btn-primary btn-large btn-glow">
                Shop Collection <ArrowRight size={20} />
              </Link>
              <Link to="/shop" className="btn btn-outline btn-large">
                Explore Features
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-circle animate-pulse-slow"></div>
            <div className="visual-glass-card animate-float">
              <div className="card-icon"><Zap size={32} color="var(--primary-color)" /></div>
              <div className="card-text">
                <h4>Next-Gen Speed</h4>
                <p>Ultimate performance</p>
              </div>
            </div>
            <div className="visual-glass-card card-2 animate-float-delayed">
              <div className="card-icon"><Shield size={32} color="var(--accent-color)" /></div>
              <div className="card-text">
                <h4>Ultra Secure</h4>
                <p>Military-grade</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg"></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container features-container">
          <div className="feature-item">
            <div className="feature-icon"><Zap size={32} /></div>
            <h3>Next-Gen Performance</h3>
            <p>Cutting-edge technology built for speed and reliability.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Shield size={32} /></div>
            <h3>Premium Warranty</h3>
            <p>Full 2-year coverage on all devices for your peace of mind.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Truck size={32} /></div>
            <h3>Express Delivery</h3>
            <p>Free worldwide shipping on orders over $150.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Gear</h2>
            <Link to="/shop" className="view-all-link">View All <ArrowRight size={16} /></Link>
          </div>
          <motion.div 
            className="products-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {featuredProducts.map(product => (
              <motion.div key={product.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
