import { Link } from 'react-router-dom';
import './Home.css';

const features = [
  { icon: '◈', title: 'Curated Selection', desc: 'Handpicked items across electronics, clothing, and accessories.' },
  { icon: '◉', title: 'Quality Assured', desc: 'Every product verified and rated by real customers worldwide.' },
  { icon: '◎', title: 'Fast Shipping', desc: 'Free shipping on all orders above $50. Same day in select areas.' },
];

const categories = [
  { name: "Electronics", emoji: "⚡", color: "#1a5a82" },
  { name: "Jewelery", emoji: "◈", color: "#0d3a5c" },
  { name: "Men's Clothing", emoji: "◻", color: "#2a6a8a" },
  { name: "Women's Clothing", emoji: "◇", color: "#4a7a9b" },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">New Season Collection</p>
          <h1 className="hero-heading">
            Shop <em>Smarter.</em><br />Live Better.
          </h1>
          <p className="hero-sub">
            Discover thousands of products from trusted brands — from fashion to tech, everything you need in one place.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn-primary">Browse Shop</Link>
            <Link to="/cart" className="btn-ghost">View Cart</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-wrap">
            <img
              src="https://i.pinimg.com/736x/c2/db/ad/c2dbad8d2db6f29d466a0337b58e25c1.jpg"
              alt="Shopping collection"
              className="hero-img"
            />
            <div className="hero-img-overlay" />
          </div>
          <div className="hero-badge">
            <span className="badge-num">4.8</span>
            <span className="badge-text">Avg. Rating</span>
          </div>
          <div className="hero-tag">
            <span>Free Returns</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map(cat => (
            <Link to="/shop" key={cat.name} className="category-card" style={{ '--cat-color': cat.color }}>
              <span className="cat-icon">{cat.emoji}</span>
              <span className="cat-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        {features.map(f => (
          <div key={f.title} className="feature-item">
            <span className="feature-icon">{f.icon}</span>
            <div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-heading">Ready to start shopping?</h2>
        <p className="cta-sub">Over 200 products waiting for you. Free returns on all orders.</p>
        <Link to="/shop" className="btn-primary">Go to Shop →</Link>
      </section>
    </div>
  );
}
