import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleQtyChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1) setQty(val);
  };

  const increment = () => setQty(q => q + 1);
  const decrement = () => setQty(q => Math.max(1, q - 1));

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const categoryLabel = product.category.replace("men's", "Men's").replace("women's", "Women's");

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.title} className="product-image" />
        <span className="product-category">{categoryLabel}</span>
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          {'★'.repeat(Math.round(product.rating.rate))}{'☆'.repeat(5 - Math.round(product.rating.rate))}
          <span className="rating-count">({product.rating.count})</span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-controls">
          <div className="qty-control">
            <button className="qty-btn" onClick={decrement} aria-label="Decrease">−</button>
            <input
              type="number"
              className="qty-input"
              value={qty}
              onChange={handleQtyChange}
              min="1"
            />
            <button className="qty-btn" onClick={increment} aria-label="Increase">+</button>
          </div>
          <button className={`add-btn ${added ? 'added' : ''}`} onClick={handleAdd}>
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}
