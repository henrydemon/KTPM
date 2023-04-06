import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/";

export const axiosClient = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const updateClient = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  processData: false,
  contentType: false,
});

export const setAccessToken = (t) => {
  axiosClient.defaults.headers.common.Authorization = `${t}`;
  axiosClient.defaults.headers.common["X-CSRF-TOKEN"] = t;

  updateClient.defaults.headers.common.Authorization = `${t}`;
  updateClient.defaults.headers.common["X-CSRF-TOKEN"] = t;
};
