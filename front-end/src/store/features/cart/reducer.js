import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { createDefaultCart } from "../../utilities";
import { fetchListCart } from "./action";

const persistConfig = {
  storage,
  key: "cart",
  stateReconciler: autoMergeLevel2,
  blacklist: ["loading", "saving"],
  version: 1,
};

const defaultState = createDefaultCart();

const cart = createReducer(defaultState, (builder) => {
  builder.addCase(fetchListCart.fulfilled, (state, { payload }) => {
    console.log(payload);
    const { data } = payload.data;
    state.cartList = data?.chitietgiohang;
    state.totalAmount = data?.tongtien;
    state.account = data?.taikhoan;
  });
});

export default persistReducer(persistConfig, cart);
