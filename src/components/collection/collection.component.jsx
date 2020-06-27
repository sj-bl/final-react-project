import React from "react";
import { Route } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import { SHOP_DATA } from "../../pages/shoppage/shop.data";

import "./collection.style.scss";

const Category = ({ match }) => {
  console.log(SHOP_DATA[match.params.category]);
  const collection = SHOP_DATA[match.params.category];
  return (
    <div className="collection-page">
      <h1 className="title">{collection.title}</h1>
      <div className="items">
        {collection.items.map((item) => {
          return <CollectionItem item={item} key={item.id} className="items" />;
        })}
      </div>
    </div>
  );
};

export default Category;
