import { combineReducers } from "@reduxjs/toolkit";
import produce from "immer";

import google from "./features/google/reducer";
import test from "./features/test/reducer";
import account from "./features/account/reducer";
import trademark from "./features/trademark/reducer";
import category from "./features/category/reducer";
import order from "./features/order/reducer";
import goods from "./features/goods/reducer";
import product from "./features/product/reducer";
import cart from "./features/cart/reducer";

const appReducer = combineReducers({
  //import keys reducer
  google,
  test,
  account,
  trademark,
  category,
  order,
  goods,
  product,
  cart,
});

const rootReducer = (state, action) => {
  const newState = produce(state, (draft) => {
    // can handle global action here
  });
  return appReducer(newState, action);
};

export default rootReducer;
