import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import { apiCreateGoods, apiListGoods, apiListGoodsById } from "./api";

export const fetchListGoods = createAsyncThunk(
  "FETCH_LIST_Goods",
  async (params) => {
    const query = qs.stringify(params);
    const response = await apiListGoods(query);
    return response;
  }
);

export const fetchListGoodsById = createAsyncThunk(
  "FETCH_LIST_GOODS_BY_ID",
  async (idGoods) => {
    const response = await apiListGoodsById(idGoods);
    return response;
  }
);

export const addNewGoodsToOrder = createAction(
  "ADD_NEW_GOODS_TO_ORDER",
  (listItem) => ({ payload: listItem })
);

export const createGoods = createAsyncThunk("CREATE_GOODS", (params) => {
  console.log("🚀 ~ file: action.js ~ line 28 ~ createGoods ~ params", params);
  return apiCreateGoods(params);
});
