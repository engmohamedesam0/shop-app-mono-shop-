import { Link } from 'react-router-dom';
import { Plus, Heart, Star, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group">
      <div className="product-image-container">
        {product.discount > 0 && (
          <div className="product-badge discount">-{product.discount}%</div>
        )}
        {product.isNewArrival && !product.discount && (
          <div className="product-badge new">New</div>
        )}
        
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="product-image"
        />
        
        {/* Quick Actions Hover */}
        <div className="product-actions">
          <button 
            className={`action-btn ${inWishlist ? 'active' : ''}`} 
            title="Add to Wishlist" 
            onClick={handleWishlistToggle}
          >
            <Heart size={18} />
          </button>
          <button className="action-btn" title="Quick View" onClick={(e) => e.preventDefault()}>
            <Eye size={18} />
          </button>
          <button className="action-btn cart" title="Add to Cart" onClick={handleAddToCart}>
            <Plus size={18} />
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title" title={product.name}>{product.name}</h3>
        
        <div className="product-rating">
          <Star size={14} className="star-icon filled" />
          <span className="rating-value">{product.rating}</span>
          <span className="rating-count">({product.reviews})</span>
        </div>
        
        <div className="product-price-row">
          <div className="product-price">
            ${product.price.toFixed(2)}
            {product.discount > 0 && (
              <span className="product-original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
