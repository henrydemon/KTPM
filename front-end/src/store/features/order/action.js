import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import {
  apiListOrder,
  apiListOrderById,
  apiRemoveOrder,
  apiUpdateOrder,
  createOrderApi,
} from "./api";

export const fetchListOrder = createAsyncThunk(
  "FETCH_LIST_ORDER",
  async (params) => {
    const query = qs.stringify(params);
    const response = await apiListOrder(query);
    return response;
  }
);

export const fetchListOrderById = createAsyncThunk(
  "FETCH_LIST_ORDER_BY_ID",
  async (idOrder) => {
    const response = await apiListOrderById(idOrder);
    return response;
  }
);

export const removeOrder = createAsyncThunk("REMOVE_ORDER", (idOrder) => {
  return apiRemoveOrder(idOrder);
});

export const updateOrder = createAsyncThunk("UPDATE_ORDER", (idOrder) => {
  return apiUpdateOrder(idOrder);
});

export const saveNameOrder = createAction("CREATE_NAME_ORDER", (name) => ({
  payload: { name },
}));

export const createOrder = createAsyncThunk("CREATE_ORDER", ({ params }) => {
  console.log(params);
  return createOrderApi(params);
});
