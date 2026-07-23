import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    subtotal, 
    tax, 
    discountAmount, 
    total,
    applyCoupon
  } = useCart();
  
  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState({ text: '', type: '' });

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode) return;
    
    const result = applyCoupon(couponCode.toUpperCase());
    setCouponMessage({
      text: result.message,
      type: result.success ? 'success' : 'error'
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-state container animate-fade-in">
        <div className="empty-cart-icon">
          <ShoppingBag size={64} />
        </div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="btn btn-primary mt-4">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page container animate-fade-in">
      <h1 className="page-title">Shopping Cart</h1>
      
      <div className="cart-layout">
        <div className="cart-items-section">
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <Link to={`/product/${item.id}`} className="cart-item-image-link">
                  <img src={item.images[0]} alt={item.name} className="cart-item-image" />
                </Link>
                
                <div className="cart-item-details">
                  <div className="cart-item-header">
                    <Link to={`/product/${item.id}`} className="cart-item-title">
                      {item.name}
                    </Link>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(index)}
                      title="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  
                  <div className="cart-item-variants">
                    {item.selectedVariants && Object.entries(item.selectedVariants).map(([key, value]) => (
                      <span key={key} className="variant-tag">{key}: {value}</span>
                    ))}
                  </div>
                  
                  <div className="cart-item-bottom">
                    <div className="cart-item-price">
                      ${item.price.toFixed(2)}
                    </div>
                    
                    <div className="quantity-selector small">
                      <button 
                        className="qty-btn" 
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                      >-</button>
                      <input 
                        type="number" 
                        className="qty-input" 
                        value={item.quantity} 
                        readOnly
                      />
                      <button 
                        className="qty-btn"
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cart-summary-section">
          <div className="cart-summary glass">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            {discountAmount > 0 && (
              <div className="summary-row text-success">
                <span>Discount</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            
            <div className="summary-row">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <form className="coupon-form" onSubmit={handleApplyCoupon}>
              <input 
                type="text" 
                className="input coupon-input" 
                placeholder="Promo Code (Try DISCOUNT10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button type="submit" className="btn btn-outline">Apply</button>
            </form>
            {couponMessage.text && (
              <p className={`coupon-message ${couponMessage.type}`}>
                {couponMessage.text}
              </p>
            )}
            
            <Link to="/checkout" className="btn btn-primary w-full checkout-btn">
              Proceed to Checkout <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
