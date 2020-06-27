import React from "react";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "./../../redux/cart/cart.selector";

import "./checkout.style.scss";
import { connect } from "react-redux";
import CheckOutItem from "./../../components/checkout-items/checkout-items.component";
import Paynow from "../../components/stripe-button/stripe-button.component";

const CheckOut = ({ cartItems, total }) => {
  //   console.log(cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total">Total: ${total}</div>
      <Paynow total={total} className="checkout-btn" />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
