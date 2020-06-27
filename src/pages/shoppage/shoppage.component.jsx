import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Category from "../../components/collection/collection.component";

import "./shoppage.style.scss";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverview} />
      <Route exact path={`${match.path}/:category`} component={Category} />
    </div>
  );
};

export default Shop;
