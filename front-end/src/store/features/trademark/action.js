import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiListTrademark,
  apiRemoveTrademark,
  apiUpdateTrademark,
  createTrademarkApi,
} from "./api";
import qs from "qs";

export const fetchListTrademark = createAsyncThunk(
  "FETCH_LIST_TRADEMARK",
  async (params) => {
    const query = qs.stringify(params);
    const response = await apiListTrademark(query);
    return response;
  }
);

export const removeTrademark = createAsyncThunk(
  "REMOVE_TRADEMARK",
  (idTrademark) => {
    return apiRemoveTrademark(idTrademark);
  }
);

export const createTrademark = createAsyncThunk(
  "CREATE_TRADEMARK",
  ({ params }) => {
    return createTrademarkApi(params);
  }
);

export const saveNameTrademark = createAction(
  "CREATE_NAME_TRADEMARK",
  (name) => ({
    payload: { name },
  })
);

export const updateTrademark = createAsyncThunk(
  "UPDATE_TRADEMARK",
  (params) => {
    return apiUpdateTrademark(params);
  }
);
