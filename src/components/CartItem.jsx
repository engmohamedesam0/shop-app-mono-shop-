import { useCart } from '../context/CartContext';
import './CartItem.css';

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cart-item-info">
        <p className="cart-item-title">{item.title}</p>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
      </div>
      <div className="cart-item-controls">
        <div className="qty-control">
          <button
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            aria-label="Decrease"
          >−</button>
          <span className="qty-display">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            aria-label="Increase"
          >+</button>
        </div>
        <p className="cart-item-subtotal">${(item.price * item.quantity).toFixed(2)}</p>
        <button className="remove-btn" onClick={() => removeItem(item.id)} aria-label="Remove">
          ✕
        </button>
      </div>
    </div>
  );
}
