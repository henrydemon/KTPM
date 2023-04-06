import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import {
  apiListCategory,
  apiRemoveCategory,
  apiUpdateCategory,
  createCategoryApi,
} from "./api";

export const fetchListCategory = createAsyncThunk(
  "FETCH_LIST_CATEGORY",
  async (params) => {
    const query = qs.stringify(params);
    const response = await apiListCategory(query);
    return response;
  }
);

export const removeCategory = createAsyncThunk(
  "REMOVE_CATEGORY",
  (idCategory) => {
    return apiRemoveCategory(idCategory);
  }
);

export const createCategory = createAsyncThunk(
  "CREATE_CATEGORY",
  ({ params }) => {
    return createCategoryApi(params);
  }
);

export const saveNameCategory = createAction(
  "CREATE_NAME_CATEGORY",
  (name) => ({
    payload: { name },
  })
);

export const updateCategory = createAsyncThunk("UPDATE_CATEGORY", (params) => {
  return apiUpdateCategory(params);
});
