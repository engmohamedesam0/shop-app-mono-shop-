import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const CATEGORIES = ['all', 'electronics', "men's clothing", "women's clothing", 'jewelery'];

export default function Shop() {
  const { products, loading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState('all');
  const [sort, setSort] = useState('default');

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating.rate - a.rating.rate;
      return 0;
    });

  return (
    <div className="shop">
      <div className="shop-header">
        <div className="shop-header-inner">
          <h1 className="shop-title">Shop</h1>
          <p className="shop-subtitle">{products.length} products available</p>
        </div>
      </div>

      <div className="shop-layout">
        {/* Filters Sidebar */}
        <aside className="shop-sidebar">
          <div className="filter-group">
            <p className="filter-label">Category</p>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'all' ? 'All Products' : cat.replace(/^\w/, c => c.toUpperCase())}
                {cat !== 'all' && (
                  <span className="filter-count">
                    {products.filter(p => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="filter-group">
            <p className="filter-label">Sort By</p>
            <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
              <option value="default">Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="shop-main">
          {loading && (
            <div className="loading-grid">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="skeleton-card">
                  <div className="skeleton-img" />
                  <div className="skeleton-line" />
                  <div className="skeleton-line short" />
                </div>
              ))}
            </div>
          )}
          {error && (
            <div className="shop-error">
              <p>⚠ Failed to load products. Please try again.</p>
            </div>
          )}
          {!loading && !error && (
            <>
              <p className="results-info">{filtered.length} results</p>
              <div className="products-grid">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
