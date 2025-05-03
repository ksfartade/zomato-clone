import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../login/LoginModal';
import { StoreContext } from '../../contexts/StoreContextProvider';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    const navigate = useNavigate();
    const { cartItems} = useContext(StoreContext);
  
    return (
      <nav className="navbar">
        <div className="logo">
            <Link to={'/'} onClick={() => setActiveTab("home")}>
              <img src={assets.logo} alt="Foodie Logo" className="logo-img" />
            </Link>
        </div>
        <ul className="nav-links">
            <Link to={'/'} className={activeTab === "home" ? 'active' : ''} onClick={() => setActiveTab("home")}>
              {"home".charAt(0).toUpperCase() + "home".slice(1)}
            </Link>
            <a href={`#menu`} className={activeTab === "menu" ? 'active' : ''} onClick={() => setActiveTab("menu")}>
              {"menu".charAt(0).toUpperCase() + "menu".slice(1)}
            </a>
            <a href={`#mobile-app`} className={activeTab === "mobile-app" ? 'active' : ''} onClick={() => setActiveTab("mobile-app")}>
              {"mobile-app".charAt(0).toUpperCase() + "mobile-app".slice(1)}
            </a>
            <a href={`#contact`} className={activeTab === "contact" ? 'active' : ''} onClick={() => setActiveTab("contact")}>
              {"contact".charAt(0).toUpperCase() + "contact".slice(1)}
            </a>
        </ul>

        <div className="right-section">
          <img src={assets.search_icon} alt="search" className="icon" />
          <Link to='/cart' className="basket-icon">
            <img src={assets.basket_icon} alt="cart" className="icon" />
            {Object.keys(cartItems).length > 0 && (
              <span className="notification-dot"></span>
            )}
          </Link>
          <button className="sign-in"  onClick={() => navigate('/login')}>Sign In</button>
        </div>

    </nav>
  );
};

export default Navbar;