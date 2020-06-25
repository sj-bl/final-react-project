import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopDataItems } from "../../redux/shopdata/shopdata.selector";
import { CollectionPreview } from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => {
  return collections.map(({ id, ...otherItems }) => {
    return <CollectionPreview key={id} {...otherItems} />;
  });
};
const mapToStateProps = createStructuredSelector({
  collections: selectShopDataItems,
});

export default connect(mapToStateProps)(CollectionOverview);
