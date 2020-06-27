import { createSelector } from "reselect";

const selectShopData = (state) => state.shopdata;

const collectionToArray = (obj) => Object.values(obj);

export const selectShopDataItems = createSelector(
  [selectShopData],
  (shopdata) => collectionToArray(shopdata.collections)
);
