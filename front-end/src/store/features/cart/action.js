import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import { apiAdToCart, apiListCart, apiRemoveToCart } from "./api";

export const fetchListCart = createAsyncThunk("FETCH_LIST_CART", async () => {
  const response = await apiListCart();
  return response;
});

export const addToCart = createAsyncThunk("ADD_TO_CART", (idProduct) => {
  return apiAdToCart(idProduct);
});

export const removeToCart = createAsyncThunk("REMOVE_TO_CART", (idProduct) => {
  return apiRemoveToCart(idProduct);
});

// export const createCategory = createAsyncThunk(
//   "CREATE_CATEGORY",
//   ({ params }) => {
//     return createCategoryApi(params);
//   }
// );

// export const saveNameCategory = createAction(
//   "CREATE_NAME_CATEGORY",
//   (name) => ({
//     payload: { name },
//   })
// );

// export const updateCategory = createAsyncThunk("UPDATE_CATEGORY", (params) => {
//   return apiUpdateCategory(params);
// });
