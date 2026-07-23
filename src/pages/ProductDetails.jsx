import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plus, Heart, Share2, Star, Check, Shield, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: 'center center' });

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      const defaults = {};
      foundProduct.variants?.forEach(v => {
        defaults[v.name] = v.options[0];
      });
      setSelectedVariants(defaults);
    }
  }, [id]);

  if (!product) {
    return <div className="container p-10 text-center">Loading product...</div>;
  }

  const handleVariantSelect = (variantName, option) => {
    setSelectedVariants(prev => ({ ...prev, [variantName]: option }));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({ ...product, selectedVariants });
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  const handleImageMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({ transformOrigin: `${x}% ${y}%` });
  };

  return (
    <div className="product-details-page container animate-fade-in">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        Home / Shop / {product.category} / <span>{product.name}</span>
      </div>

      <div className="product-details-layout">
        {/* Gallery */}
        <div className="product-gallery">
          <div className="thumbnail-list">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                className={`thumbnail-btn ${activeImage === idx ? 'active' : ''}`}
                onClick={() => setActiveImage(idx)}
              >
                <img src={img} alt={`Thumbnail ${idx}`} />
              </button>
            ))}
          </div>
          
          <div 
            className={`main-image-container ${isZoomed ? 'zoomed' : ''}`}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleImageMouseMove}
          >
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="main-image"
              style={isZoomed ? zoomStyle : {}}
            />
            {product.discount > 0 && (
              <span className="badge badge-danger absolute-badge">-{product.discount}%</span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="product-info-panel">
          <div className="product-brand">{product.brand}</div>
          <h1 className="product-title-large">{product.name}</h1>
          
          <div className="product-rating-large">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < Math.floor(product.rating) ? 'filled' : ''} 
                />
              ))}
            </div>
            <span className="rating-text">{product.rating} ({product.reviews} Reviews)</span>
          </div>

          <div className="product-price-large">
            ${product.price.toFixed(2)}
            {product.discount > 0 && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-availability">
            {product.inStock ? (
              <span className="text-success flex items-center gap-2">
                <Check size={18} /> In Stock ({product.stockCount} available)
              </span>
            ) : (
              <span className="text-danger flex items-center gap-2">
                Out of Stock
              </span>
            )}
          </div>

          {/* Variants */}
          {product.variants?.map((variant, idx) => (
            <div key={idx} className="variant-section">
              <h4 className="variant-title">{variant.name}</h4>
              <div className="variant-options">
                {variant.options.map(option => (
                  <button 
                    key={option}
                    className={`variant-btn ${selectedVariants[variant.name] === option ? 'active' : ''}`}
                    onClick={() => handleVariantSelect(variant.name, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Quantity & Actions */}
          <div className="purchase-section">
            <div className="quantity-selector">
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >-</button>
              <input 
                type="number" 
                className="qty-input" 
                value={quantity} 
                readOnly
              />
              <button 
                className="qty-btn"
                onClick={() => setQuantity(Math.min(product.stockCount || 10, quantity + 1))}
              >+</button>
            </div>
            
            <div className="action-buttons">
              <button 
                className="btn btn-primary flex-1" 
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <Plus size={18} /> Add to Cart
              </button>
              <button 
                className="btn btn-outline flex-1"
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                Buy Now
              </button>
              <button className="btn btn-ghost icon-only-btn" title="Add to Wishlist">
                <Heart size={20} />
              </button>
              <button className="btn btn-ghost icon-only-btn" title="Share">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="trust-badge">
              <Shield size={24} className="text-accent" />
              <div>
                <h5>1 Year Warranty</h5>
                <p>Full protection</p>
              </div>
            </div>
            <div className="trust-badge">
              <Truck size={24} className="text-accent" />
              <div>
                <h5>Free Shipping</h5>
                <p>On orders over $50</p>
              </div>
            </div>
            <div className="trust-badge">
              <RotateCcw size={24} className="text-accent" />
              <div>
                <h5>30 Days Return</h5>
                <p>Money back guarantee</p>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="specifications-section">
              <h3 className="section-subtitle">Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <th>{key}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
