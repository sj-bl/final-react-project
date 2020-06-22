import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.style.scss";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  // console.log(id, name, imageUrl, price);

  const { id, name, imageUrl, price } = item;
  return (
    <div key={id} className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton invert onClick={() => addItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
