import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { createDefaultProduct } from "../../utilities";
import { fetchDetailProduct, fetchListProductBySearch } from "./action";

const persistConfig = {
  storage,
  key: "product",
  stateReconciler: autoMergeLevel2,
  blacklist: ["loading", "saving"],
  version: 1,
};

const defaultState = createDefaultProduct();

const product = createReducer(defaultState, (builder) => {
  builder.addCase(fetchListProductBySearch.fulfilled, (state, { payload }) => {
    const { data, listData } = payload.data;
    state.productList = listData;
    state.totalPages = data.totalPages;
    state.currentPage = data.currentPage;
  })

  .addCase(fetchDetailProduct.fulfilled, (state, { payload }) => {
    const { data } = payload
    state.detailProduct = data.listData[0]
  });

  // .addCase(fetchListOrderById.fulfilled, (state, { payload }) => {
  //   const { data } = payload.data;
  //   state.detailOrder.email = data.Account;
  //   state.detailOrder.name = data.Receiver;
  //   state.detailOrder.address = data.deliveryAddress;
  //   state.detailOrder.totalAmount = data.totalPrice;
  //   state.detailOrder.listDetailOrder = data.detailOrder;
  // })

  // .addCase(saveNameOrder, (state, { payload }) => {
  //   const { name } = payload;
  //   state.currentNameOrder = name;
  // });
});

export default persistReducer(persistConfig, product);
