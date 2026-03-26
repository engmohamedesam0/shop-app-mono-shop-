import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(i => i.id === action.item.id);
      if (existing) {
        return state.map(i =>
          i.id === action.item.id
            ? { ...i, quantity: i.quantity + action.quantity }
            : i
        );
      }
      return [...state, { ...action.item, quantity: action.quantity }];
    }
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return state.filter(i => i.id !== action.id);
      }
      return state.map(i =>
        i.id === action.id ? { ...i, quantity: action.quantity } : i
      );
    }
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const addItem = (item, quantity = 1) =>
    dispatch({ type: 'ADD_ITEM', item, quantity });

  const updateQuantity = (id, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });

  const removeItem = (id) =>
    dispatch({ type: 'REMOVE_ITEM', id });

  const clearCart = () =>
    dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ cart, totalItems, totalPrice, addItem, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
