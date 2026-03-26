import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import './Cart.css';

export default function Cart() {
  const { cart, totalItems, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart">
        <div className="cart-header">
          <div className="cart-header-inner">
            <h1 className="cart-title">Cart</h1>
          </div>
        </div>
        <div className="cart-empty">
          <span className="empty-icon">◎</span>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/shop" className="btn-primary">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-header-inner">
          <h1 className="cart-title">Cart</h1>
          <p className="cart-count">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          <div className="cart-items-header">
            <span>Product</span>
            <span></span>
            <span className="align-right">Qty / Total</span>
          </div>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <aside className="order-summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="summary-lines">
            <div className="summary-line">
              <span>Subtotal ({totalItems} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span>{totalPrice >= 50 ? <em className="free">Free</em> : '$4.99'}</span>
            </div>
            {totalPrice < 50 && (
              <p className="shipping-note">
                Add ${(50 - totalPrice).toFixed(2)} more for free shipping
              </p>
            )}
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${(totalPrice + (totalPrice >= 50 ? 0 : 4.99)).toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
          <Link to="/shop" className="continue-link">← Continue Shopping</Link>
        </aside>
      </div>
    </div>
  );
}
