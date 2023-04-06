import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { createDefaultCategory } from "../../utilities";
import { fetchListCategory, saveNameCategory } from "./action";

const persistConfig = {
  storage,
  key: "category",
  stateReconciler: autoMergeLevel2,
  blacklist: ["loading", "saving"],
  version: 1,
};

const defaultState = createDefaultCategory();

const category = createReducer(defaultState, (builder) => {
  builder
    .addCase(fetchListCategory.fulfilled, (state, { payload }) => {
      const { data, listData } = payload.data;
      state.categoryList = listData;
      state.totalPages = data?.totalPages;
      state.currentPage = data?.currentPage;
    })

    .addCase(saveNameCategory, (state, { payload }) => {
      const { name } = payload;
      state.currentNameCategory = name;
    });
});

export default persistReducer(persistConfig, category);
