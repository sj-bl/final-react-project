import React from "react";
import "./shoppage.style.scss";
import { SHOP_DATA } from "./shop.data";
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = SHOP_DATA;
  }
  render() {
    let collections = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherItems }) => {
          return <CollectionPreview key={id} {...otherItems} />;
        })}
      </div>
    );
  }
}

export default Shop;
