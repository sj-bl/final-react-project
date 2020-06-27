import React from "react";

import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";

export const CollectionPreview = ({ title, items, match, routeName }) => {
  return (
    <div className="collection-preview">
      <Link to={routeName}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
      <div className="preview">
        {items.slice(0, 4).map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
