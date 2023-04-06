import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { createDefaultAccount } from "../../utilities";

import {
  changStoreProfile,
  fetchCurrentAccount,
  fetchListAccount,
  loginAccount,
  saveToken,
} from "./action";

const persistConfig = {
  storage,
  key: "account",
  stateReconciler: autoMergeLevel2,
  blacklist: ["loading", "saving"],
  version: 1,
};

const defaultState = createDefaultAccount();

const account = createReducer(defaultState, (builder) => {
  builder

    .addCase(fetchListAccount.fulfilled, (state, { payload }) => {
      const { data, listData } = payload.data;
      state.accountList = listData;
      state.totalPages = data.totalPages;
      state.currentPage = data.currentPage;
    })

    .addCase(loginAccount.fulfilled, (state, { payload }) => {
      const { message, data } = payload.data;
      state.messageLogin = message;
      state.token = data.Token;
    })

    .addCase(saveToken, (state, { payload }) => {
      const { token } = payload;
      state.token = token;
    })

    .addCase(fetchCurrentAccount.fulfilled, (state, { payload }) => {
      const { listData } = payload.data;
      state.currentAccount.name = listData[0].ten;
      state.currentAccount.phone = listData[0].sodienthoai;
      state.currentAccount.role = listData[0].quyen;
      state.currentAccount.id = listData[0].mataikhoan;
      state.currentAccount.lastName = listData[0].holot;
      state.currentAccount.email = listData[0].email;
      state.currentAccount.authority = listData[0].authorities[0].authority;
    })

    .addCase(changStoreProfile, (state, { payload }) => {
      const { params } = payload;
      state.currentAccount.name = params.ten;
      state.currentAccount.lastName = params.holot;
      state.currentAccount.phone = params.sodienthoai;
    })

    .addCase("LOGOUT_CLEAR_TOKEN", (state) => {
      state.token = "";
    });
});

export default persistReducer(persistConfig, account);
