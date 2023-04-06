import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { createDefaultOrder } from "../../utilities";
import { fetchListOrder, fetchListOrderById, saveNameOrder } from "./action";

const persistConfig = {
  storage,
  key: "order",
  stateReconciler: autoMergeLevel2,
  blacklist: ["loading", "saving"],
  version: 1,
};

const defaultState = createDefaultOrder();

const order = createReducer(defaultState, (builder) => {
  builder
    .addCase(fetchListOrder.fulfilled, (state, { payload }) => {
      const { data, listData } = payload.data;
      state.orderList = listData;
      state.totalPages = data.totalPages;
      state.currentPage = data.currentPage;
    })

    .addCase(fetchListOrderById.fulfilled, (state, { payload }) => {
      const { data } = payload.data;
      state.detailOrder.email = data.Account;
      state.detailOrder.name = data.Receiver;
      state.detailOrder.address = data.deliveryAddress;
      state.detailOrder.totalAmount = data.totalPrice;
      state.detailOrder.listDetailOrder = data.detailOrder;
    })

    .addCase(saveNameOrder, (state, { payload }) => {
      const { name } = payload;
      state.currentNameOrder = name;
    });
});

export default persistReducer(persistConfig, order);
