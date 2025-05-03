// ThemeContext.js
import { createContext } from 'react';
import React, { useState } from 'react';
import { food_list } from '../assets/frontend_assets/assets';


export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({});

  const addItem = (itemId) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      if (newItems[itemId]) {
        newItems[itemId] += 1;
      } else {
        newItems[itemId] = 1;
      }
      return newItems;
    });
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      if (newItems[itemId]) {
        newItems[itemId] -= 1;
        if (newItems[itemId] === 0) {
          delete newItems[itemId];
        }
      }
      return newItems;
    });
  };

  const getCartTotal = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const item = food_list.find((item) => item._id === itemId);
      if (item) {
        total += item.price * cartItems[itemId];
      }
    }
    return total;
  }


  const contextValue = {
    food_list,
    cartItems,
    addItem,  
    removeItem,
    getCartTotal,
  };


  return (
    <StoreContext.Provider value={{ ...contextValue }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;


