import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order Your Favourite Food</h2>
        <p>Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes</p>
        <button className="view-menu-button">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
