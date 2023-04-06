import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { createDefaultGoods } from "../../utilities";
import {
  addNewGoodsToOrder,
  fetchListGoods,
  fetchListGoodsById,
  incrementQuantity,
} from "./action";

const persistConfig = {
  storage,
  key: "goods",
  stateReconciler: autoMergeLevel2,
  blacklist: ["loading", "saving"],
  version: 1,
};

const defaultState = createDefaultGoods();

const goods = createReducer(defaultState, (builder) => {
  builder
    .addCase(fetchListGoods.fulfilled, (state, { payload }) => {
      const { data, listData } = payload.data;
      state.goodsList = listData;
      state.totalPages = data.totalPages;
      state.currentPage = data.currentPage;
    })

    .addCase(fetchListGoodsById.fulfilled, (state, { payload }) => {
      const { listData } = payload.data;
      state.detailGoods.nameStaff = listData[0].tennhanvien;
      state.detailGoods.dateGoods = listData[0].ngaynhap;
      state.detailGoods.totalAmount = listData[0].tongtien;
      state.detailGoods.listDetailGoods = listData[0].chitietphieunhap;
    })

    .addCase(addNewGoodsToOrder, (state, { payload }) => {
      const itemInGoods = state.arrayStoreGoods.find(
        (item) => item.id === payload.id
      );
      if (itemInGoods) {
        itemInGoods.quantity++;
      } else {
        state.arrayStoreGoods.push({ ...payload, quantity: 1 });
      }
    });

  // .addCase(saveNameOrder, (state, { payload }) => {
  //   const { name } = payload;
  //   state.currentNameOrder = name;
  // });
});

export default persistReducer(persistConfig, goods);
