import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown, Loader } from 'lucide-react';
import { products, categories, brands } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const PRODUCTS_PER_PAGE = 8;

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
      if (p.price < priceRange.min || p.price > priceRange.max) return false;
      if (p.rating < minRating) return false;
      if (inStockOnly && !p.inStock) return false;
      if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'newest': return new Date(b.dateAdded) - new Date(a.dateAdded);
        default: return 0;
      }
    });
  }, [selectedCategory, selectedBrands, priceRange, minRating, inStockOnly, sortBy, searchQuery]);

  useEffect(() => {
    setVisibleCount(PRODUCTS_PER_PAGE);
  }, [filteredProducts]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + PRODUCTS_PER_PAGE, filteredProducts.length));
      setIsLoading(false);
    }, 600);
  }, [isLoading, hasMore, filteredProducts.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMore]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="shop-page container animate-fade-in">
      <div className="shop-header">
        <h1 className="shop-title">Shop All</h1>
        <div className="shop-controls">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="input search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="sort-wrapper">
            <select 
              className="input sort-select" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={16} className="sort-icon" />
          </div>
          <button className="btn btn-outline filter-toggle" onClick={() => setIsFilterOpen(true)}>
            <Filter size={18} /> Filters
          </button>
        </div>
      </div>

      <div className="shop-layout">
        {/* Sidebar Filters */}
        <aside className={`shop-sidebar ${isFilterOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h3>Filters</h3>
            <button className="icon-btn" onClick={() => setIsFilterOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="filter-section">
            <h4 className="filter-title">Categories</h4>
              <ul className="filter-list">
                <li>
                  <button 
                    className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('All')}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
          </div>

          <div className="filter-section">
            <h4 className="filter-title">Brands</h4>
            <div className="checkbox-list">
              {brands.map(brand => (
                <label key={brand} className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-title">Price Range</h4>
            <div className="price-inputs">
              <input 
                type="number" 
                className="input" 
                placeholder="Min" 
                value={priceRange.min}
                onChange={e => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
              />
              <span>-</span>
              <input 
                type="number" 
                className="input" 
                placeholder="Max" 
                value={priceRange.max}
                onChange={e => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
              />
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-title">Rating</h4>
            <select 
              className="input" 
              value={minRating} 
              onChange={e => setMinRating(Number(e.target.value))}
            >
              <option value="0">All Ratings</option>
              <option value="4">4 Stars & Up</option>
              <option value="3">3 Stars & Up</option>
              <option value="2">2 Stars & Up</option>
            </select>
          </div>

          <div className="filter-section">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={inStockOnly}
                onChange={e => setInStockOnly(e.target.checked)}
              />
              <span className="font-medium">In Stock Only</span>
            </label>
          </div>
          
          <button 
            className="btn btn-primary w-full mt-4" 
            onClick={() => {
              handleCategoryChange('All');
              setSelectedBrands([]);
              setPriceRange({ min: 0, max: 1000 });
              setMinRating(0);
              setInStockOnly(false);
              setSearchQuery('');
            }}
          >
            Clear Filters
          </button>
        </aside>

        {/* Product Grid */}
        <div className="shop-content">
          <div className="products-grid">
            {visibleProducts.length > 0 ? (
              visibleProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your filters.</p>
              </div>
            )}
          </div>

          {hasMore && (
            <div className="infinite-scroll-loader" ref={observerTarget}>
              {isLoading && (
                <div className="loading-spinner">
                  <Loader size={32} className="spinner-icon" />
                  <p>Loading more products...</p>
                </div>
              )}
            </div>
          )}

          {!hasMore && visibleProducts.length > 0 && (
            <div className="end-of-results">
              <p>You've reached the end of the catalog</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay for mobile filter */}
      {isFilterOpen && (
        <div className="filter-overlay" onClick={() => setIsFilterOpen(false)}></div>
      )}
    </div>
  );
}
