import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApiPoke } from "./api";

export const fetchApiPoke = createAsyncThunk("API_POKE", async () => {
  const response = await getApiPoke();
  return response;
});
