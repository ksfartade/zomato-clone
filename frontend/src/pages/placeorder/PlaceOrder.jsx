import React, { useContext } from 'react';
import './placeorder.css';
import { StoreContext } from '../../contexts/StoreContextProvider';

const PlaceOrder = () => {
  const {getCartTotal } = useContext(StoreContext);
  
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

        <input type="email" placeholder='Email' name="email" id="" />
        <input type="text" placeholder='Address' name="address" id="" />

        <div className="multi-fields">
          <input type="text" placeholder="City" name="city" id="" />
          <input type="text" placeholder="State" name="state" id="" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip-Code" name="zip_code" id="" />
          <input type="text" placeholder="Country" name="country" id="" />
        </div>

        <input type="text" placeholder='Phone' name="Phone" id="" />
      </div>

      <div className="place-order-right">
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

            <button onClick={() => navigate('/order')}>Proceed To Payment</button>
          </div>
      </div>
    </form>
  )
};

export default PlaceOrder