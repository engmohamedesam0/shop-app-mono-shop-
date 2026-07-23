import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Mail, Phone, MapPin, Package, Heart, Settings, 
  LogOut, Camera, Shield, ChevronRight, Save, X, ShoppingBag 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './Profile.css';

export default function Profile() {
  const navigate = useNavigate();
  const { totalItems, clearCart } = useCart();
  const { wishlistItems } = useWishlist();
  const [isEditing, setIsEditing] = useState(false);

  const [profilePicture, setProfilePicture] = useState('');
  const [fullName, setFullName] = useState('Mohamed Esam');
  const [email, setEmail] = useState('mohamed@example.com');
  const [phone, setPhone] = useState('+20 10 XXX XXXX');
  const [address, setAddress] = useState('15th of May City, Cairo, Egypt');
  const [tempPicture, setTempPicture] = useState('');

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const data = JSON.parse(savedProfile);
      setProfilePicture(data.profilePicture || '');
      setFullName(data.fullName || 'Mohamed Esam');
      setEmail(data.email || 'mohamed@example.com');
      setPhone(data.phone || '+20 10 XXX XXXX');
      setAddress(data.address || '15th of May City, Cairo, Egypt');
    } else {
      setProfilePicture('/profile.jpg');
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const profileData = {
      profilePicture: tempPicture || profilePicture,
      fullName,
      email,
      phone,
      address
    };
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    if (tempPicture) {
      setProfilePicture(tempPicture);
      setTempPicture('');
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempPicture('');
    setIsEditing(false);
  };

  const handleLogout = () => {
    clearCart();
    navigate('/');
  };

  const displayPicture = tempPicture || profilePicture;

  return (
    <div className="profile-page container animate-fade-in">
      <h1 className="page-title">My Profile</h1>
      
      <div className="profile-layout">
        {/* Sidebar */}
        <aside className="profile-sidebar">
          <div className="profile-card glass">
            <div className="profile-avatar-wrapper">
              <img 
                src={displayPicture || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'} 
                alt={fullName} 
                className="profile-avatar"
              />
              {isEditing && (
                <label className="avatar-edit-btn" title="Change photo">
                  <Camera size={16} />
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="hidden-file-input" 
                  />
                </label>
              )}
            </div>
            <h2 className="profile-name">{fullName}</h2>
            <p className="profile-email">{email}</p>
            <p className="profile-member">Member since January 2023</p>
          </div>

          <nav className="profile-nav">
            <a href="#info" className="profile-nav-item active">
              <User size={20} />
              <span>Personal Info</span>
              <ChevronRight size={16} />
            </a>
            <a href="#orders" className="profile-nav-item">
              <Package size={20} />
              <span>Orders</span>
              <ChevronRight size={16} />
            </a>
            <a href="#wishlist" className="profile-nav-item">
              <Heart size={20} />
              <span>Wishlist</span>
              <ChevronRight size={16} />
            </a>
            <a href="#settings" className="profile-nav-item">
              <Settings size={20} />
              <span>Settings</span>
              <ChevronRight size={16} />
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="profile-content">
          {/* Stats Cards */}
          <div className="profile-stats">
            <div className="stat-card">
              <div className="stat-icon orders">
                <Package size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">12</span>
                <span className="stat-label">Total Orders</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon wishlist">
                <Heart size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{wishlistItems.length}</span>
                <span className="stat-label">Wishlist Items</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon cart">
                <ShoppingBag size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{totalItems}</span>
                <span className="stat-label">Cart Items</span>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="profile-section glass">
            <div className="section-header-flex">
              <h3>Personal Information</h3>
              <div className="section-actions">
                {isEditing ? (
                  <>
                    <button className="btn btn-outline" onClick={handleCancel}>
                      <X size={18} />
                      Cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleSave}>
                      <Save size={18} />
                      Save Changes
                    </button>
                  </>
                ) : (
                  <button 
                    className="btn btn-primary"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
            
            <div className="info-grid">
              <div className="info-item">
                <label><User size={16} /> Full Name</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)}
                    className="input" 
                    placeholder="Enter your full name"
                  />
                ) : (
                  <p>{fullName}</p>
                )}
              </div>
              <div className="info-item">
                <label><Mail size={16} /> Email Address</label>
                {isEditing ? (
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="input" 
                    placeholder="Enter your email"
                  />
                ) : (
                  <p>{email}</p>
                )}
              </div>
              <div className="info-item">
                <label><Phone size={16} /> Phone Number</label>
                {isEditing ? (
                  <input 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    className="input" 
                    placeholder="Enter your phone number"
                  />
                ) : (
                  <p>{phone}</p>
                )}
              </div>
              <div className="info-item full-width">
                <label><MapPin size={16} /> Shipping Address</label>
                {isEditing ? (
                  <textarea 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)}
                    className="input textarea" 
                    rows="2"
                    placeholder="Enter your shipping address"
                  />
                ) : (
                  <p className="address-text">{address}</p>
                )}
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="profile-section glass">
            <h3>Account Settings</h3>
            <div className="settings-list">
              <button className="setting-item">
                <Shield size={20} />
                <div className="setting-info">
                  <span className="setting-title">Privacy & Security</span>
                  <span className="setting-desc">Manage your password and security preferences</span>
                </div>
                <ChevronRight size={18} />
              </button>
              <button className="setting-item">
                <Settings size={20} />
                <div className="setting-info">
                  <span className="setting-title">Preferences</span>
                  <span className="setting-desc">Notifications, language, and region</span>
                </div>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Logout */}
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
