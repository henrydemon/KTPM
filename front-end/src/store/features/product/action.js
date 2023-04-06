import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiDetailProduct, apiListProductBySearch, apiRemoveProduct } from "./api";
import qs from "qs";

export const fetchListProductBySearch = createAsyncThunk(
  "FETCH_LIST_PRODUCT_SEARCH",
  async (params) => {
    const query = qs.stringify(params);
    const response = await apiListProductBySearch(query);
    return response;
  }
);

export const removeProduct = createAsyncThunk("REMOVE_PRODUCT", (idProduct) => {
  return apiRemoveProduct(idProduct);
});

export const fetchDetailProduct = createAsyncThunk(
  "FETCH_DETAIL_PRODUCT",
  async (product_id) => {
    const response = await apiDetailProduct(product_id);
    return response;
  }
);
