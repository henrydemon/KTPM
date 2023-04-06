import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiChangePassword,
  apiCurrentAccount,
  apiListAccount,
  apiLoginAccount,
  apiRemoveAccount,
  apiSaveChangeProfile,
  createStaffApi,
} from "./api";
import qs from "qs";

export const logoutAccount = createAction("LOGOUT_CLEAR_TOKEN");
export const changStoreProfile = createAction(
  "CHANGE_STORE_PROFILE",
  (params) => ({
    payload: { params },
  })
);

export const fetchListAccount = createAsyncThunk(
  "FETCH_LIST_ACCOUNT",
  async (params) => {
    const query = qs.stringify(params);
    const response = await apiListAccount(query);
    return response;
  }
);

export const loginAccount = createAsyncThunk("LOGIN_ACCOUNT", ({ params }) => {
  const response = apiLoginAccount(params);
  return response;
});

export const saveToken = createAction("SAVE_TOKEN", (token) => ({
  payload: { token },
}));

export const createStaff = createAsyncThunk("CREATE_STAFF", ({ params }) => {
  return createStaffApi(params);
});

export const fetchCurrentAccount = createAsyncThunk(
  "GET_CURRENT_ACCOUNT",
  async () => {
    const response = await apiCurrentAccount();
    return response;
  }
);

export const changePassWord = createAsyncThunk(
  "CHANGE_PASSWORD",
  ({ params }) => {
    return apiChangePassword(params);
  }
);

export const changeSaveChangeProfile = createAsyncThunk(
  "SAVE_CHANGE_PROFILE",
  ({ params }) => {
    return apiSaveChangeProfile(params);
  }
);

export const removeAccount = createAsyncThunk("REMOVE_ACCOUNT", (idAccount) => {
  return apiRemoveAccount(idAccount);
});
