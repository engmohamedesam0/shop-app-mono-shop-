import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { ArrowRight, Zap, Star, Clock, Search } from 'lucide-react';
import { products, categories } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';
import './Home.css';

export default function Home() {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter(p => p.isNewArrival).slice(0, 4);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 8);
  }, [searchQuery]);

  return (
    <div className="home animate-fade-in">
      {/* Hero Section */}
      <section className="hero-video-section">
        <video
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
        
        <div className="container hero-video-container">
          <div className="hero-video-content animate-slide-up">
            <span className="badge badge-accent mb-4">New Collection 2026</span>
            <h1 className="hero-title text-white">Discover Premium Quality Products</h1>
            <p className="hero-subtitle text-white-muted">
              Elevate your lifestyle with our curated selection of top-tier electronics, fashion, and home essentials.
            </p>
            <div className="hero-actions hero-actions-center">
              <Link to="/shop" className="btn btn-primary">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link to="/shop" className="btn btn-outline-white">
                Explore Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="home-search" className="section search-section">
        <div className="container">
          <div className="search-wrapper">
            <Search size={24} className="search-icon" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="home-search-input"
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')}>
                ×
              </button>
            )}
          </div>
          
          {searchQuery && (
            <div className="search-results animate-slide-up">
              <h3 className="search-results-title">
                {searchResults.length > 0 
                  ? `Results for "${searchQuery}"` 
                  : `No products found for "${searchQuery}"`}
              </h3>
              {searchResults.length > 0 && (
                <div className="products-grid">
                  {searchResults.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <Link to="/shop" className="section-link">View All <ArrowRight size={16} /></Link>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => {
              const categoryProducts = products.filter(p => p.category === category);
              const categoryCount = categoryProducts.length;
              const highestProduct = categoryProducts.reduce((highest, current) => {
                if (!highest) return current;
                if (current.rating > highest.rating) return current;
                if (current.rating === highest.rating) {
                  return current.price > highest.price ? current : highest;
                }
                return highest;
              }, null);

              return (
                <Link 
                  key={category} 
                  to={`/shop?category=${encodeURIComponent(category)}`}
                  className="category-card"
                  style={{ 
                    backgroundImage: highestProduct && highestProduct.images ? `url(${highestProduct.images[0]})` : '',
                    animationDelay: `${index * 0.1}s` 
                  }}
                >
                  <div className="category-overlay"></div>
                  <div className="category-content">
                    <span className="category-count-badge">{categoryCount} Products</span>
                    <h3 className="category-name">{category}</h3>
                    {highestProduct && (
                      <div className="category-top-product">
                        <span className="top-product-label">Top Product</span>
                        <div className="top-product-name">{highestProduct.name}</div>
                        <div className="top-product-price">${highestProduct.price.toFixed(2)}</div>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flash Sale */}
      <section className="section flash-sale-section bg-surface">
        <div className="container">
          <div className="section-header">
            <div className="flex-align-center gap-3">
              <Zap className="text-warning" size={28} />
              <h2 className="section-title m-0">Flash Sale</h2>
              <div className="countdown-timer badge badge-danger ml-3">
                <Clock size={14} className="mr-1" />
                02:15:45
              </div>
            </div>
            <Link to="/shop?sale=true" className="section-link">See All Deals <ArrowRight size={16} /></Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section best-sellers-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Best Sellers</h2>
            <Link to="/shop?sort=bestselling" className="section-link">View All <ArrowRight size={16} /></Link>
          </div>
          <div className="products-grid">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
