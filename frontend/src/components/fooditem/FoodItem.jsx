import {React, useState, useContext, useEffect} from 'react';
import './fooditem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../contexts/StoreContextProvider';

const FoodItem = ({ item }) => {
    const {cartItems, addItem, removeItem } = useContext(StoreContext);

    return (
      <div className="food-card">
        <div className="image-container">
          <img src={item.image} alt={item.name} className="food-image" />
          
          <div className="add-btn-wrapper">
            {!cartItems[item._id]? (
              <img src={assets.add_icon_white} onClick={() => addItem(item._id)} alt="Add item" className="add" />
            ) : (
              <div className="qty-control">
                <img src={assets.add_icon_green} onClick = {() => addItem(item._id)} alt="Add" />
                <span>{cartItems[item._id]}</span>
                <img src={assets.remove_icon_red} onClick = {() => removeItem(item._id)} alt="Remove" />
              </div>
            )}
          </div>
        </div>
  
        <div className="food-info">
          <div className="name-rating">
            <h3>{item.name}</h3>
            <img src={assets.rating_starts} alt="rating" className="rating-img" />
          </div>
  
          <div className="description-price">
            <p>{item.description}</p>
            <span className="price">${item.price}</span>
          </div>
        </div>
      </div>
    );
  };
  

export default FoodItem


