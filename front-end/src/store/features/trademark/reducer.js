import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { createDefaultTrademark } from "../../utilities";
import { fetchListTrademark, saveNameTrademark } from "./action";

const persistConfig = {
  storage,
  key: "trademark",
  stateReconciler: autoMergeLevel2,
  blacklist: ["loading", "saving"],
  version: 1,
};

const defaultState = createDefaultTrademark();

const trademark = createReducer(defaultState, (builder) => {
  builder
    .addCase(fetchListTrademark.fulfilled, (state, { payload }) => {
      const { data, listData } = payload.data;
      state.trademarkList = listData;
      state.totalPages = data?.totalPages;
      state.currentPage = data?.currentPage;
    })

    .addCase(saveNameTrademark, (state, { payload }) => {
      const { name } = payload;
      state.currentNameTrademark = name;
    });
});

export default persistReducer(persistConfig, trademark);
