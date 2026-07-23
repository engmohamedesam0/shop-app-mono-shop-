import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Search, Heart, ShoppingBag, User, Menu } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const { totalItems } = useCart();
  const { wishlistItems } = useWishlist();

  const handleSearchClick = () => {
    const searchSection = document.getElementById('home-search');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
      const input = searchSection.querySelector('.home-search-input');
      if (input) {
        setTimeout(() => input.focus(), 500);
      }
    }
  };

  return (
    <nav className="navbar glass">
      <div className="container navbar-container">
        <div className="navbar-mobile-menu">
          <button className="icon-btn"><Menu size={24} /></button>
        </div>

        <NavLink to="/" className="navbar-logo">
          mono<span>.</span>
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>
        </div>

        <div className="navbar-actions">
          <button className="icon-btn search-btn" title="Search" onClick={handleSearchClick}>
            <Search size={20} />
          </button>
          <NavLink to="/wishlist" className="icon-btn wishlist-btn" title="Wishlist">
            <Heart size={20} />
            {wishlistItems.length > 0 && <span className="action-badge">{wishlistItems.length}</span>}
          </NavLink>
          <NavLink to="/cart" className="icon-btn cart-btn" title="Cart">
            <ShoppingBag size={20} />
            {totalItems > 0 && <span className="action-badge">{totalItems}</span>}
          </NavLink>
          <NavLink to="/profile" className="icon-btn user-btn" title="Profile">
            <User size={20} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
