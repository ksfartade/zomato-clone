import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../contexts/StoreContextProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeItem, getCartTotal } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-titles">
          <p className="cart-item-title">Item</p>
          <p className="cart-item-title">Title</p>
          <p className="cart-item-title">Price</p>
          <p className="cart-item-title">Quantity</p>
          <p className="cart-item-title">Total</p>
          <p className="cart-item-title">Remove</p>
        </div>

        <br />
        <hr />

        {food_list.map((item) => {
          const quantity = cartItems[item._id];
          if (quantity) {
            return (
              <div className="cart-item-titles cart-item" key={item._id}>
                <div className="cart-item-title">
                  {" "}
                  <img src={item.image} alt={item.title} />{" "}
                </div>
                <p className="cart-item-title">{item.name}</p>
                <p className="cart-item-title">${item.price}</p>
                <p className="cart-item-title">{quantity}</p>
                <p className="cart-item-title">
                  ${(item.price * quantity).toFixed(2)}
                </p>
                <button
                  className="cart-item-title"
                  onClick={() => removeItem(item._id)}
                >
                  X
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getCartTotal()}</p>
            </div>
              <hr />
            <div className="cart-total-details">
              <p>Shipping</p>
              <p>${10}</p>
            </div>
              <hr />
            <div className="cart-total-details total-price">
              <p>Total</p>
              <p>${getCartTotal() + 10}</p>
            </div>
              <hr />
          </div>

          <button onClick={() => navigate('/order')}>Proceed To Checkout</button>
        </div>

        <div className="cart-promocode">
          <h2>Promo Code</h2>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Enter Promo Code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
