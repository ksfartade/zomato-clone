import React from 'react'
import './exploremenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu">
      <h1 className="menu-heading">Explore our menu</h1>
      <p className="menu-subtext">
        Choose from a diverse menu featuring a delectable array of dishes. <br />
        Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="menu-list">
        {menu_list.map((item, index) => (
          <div onClick={() => { 
              setCategory( (prev) => (item.menu_name === prev)? "All" : item.menu_name);
              console.log("Selected category", category); 
            }} className="menu-item" key={index}>
            <img src={item.menu_image} alt={item.menu_name} className={`menu-image ${category === item.menu_name ? 'active' : ''}`}  />
            <p className="menu-name">{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
