import React, { useContext } from 'react';
import './fooddisplay.css';
import { StoreContext } from '../../contexts/StoreContextProvider';
import FoodItem from '../fooditem/FoodItem';

const FoodDisplay = ({ selectedCategory }) => {
  const { food_list } = useContext(StoreContext);

  const filteredList = (selectedCategory !== "All")
    ? food_list.filter(item => item.category === selectedCategory)
    : food_list;

  return (
    <div className="food-display-container">
      <h2>Top Dishes For You</h2>
      <div className="food-grid">
        {filteredList.map((item, index) => (
            <FoodItem key = {index} item = {item}/>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
