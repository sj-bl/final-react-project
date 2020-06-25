import React from "react";
import { connect } from "react-redux";

import {
  clearItem,
  addItem,
  removeItem,
} from "./../../redux/cart/cart.actions";

import "./checkout-items.style.scss";

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div
          className="arrow"
          onClick={() => addItem({ ...cartItem, id: cartItem.id })}
        >
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &times;
      </div>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToprops)(CheckOutItem);
