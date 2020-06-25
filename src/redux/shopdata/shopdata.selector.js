import { createSelector } from "reselect";

const selectShopData = (state) => state.shopdata;

export const selectShopDataItems = createSelector(
  [selectShopData],
  (shopdata) => shopdata.collections
);
