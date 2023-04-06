import { axiosClient, updateClient } from "../../api/axiosClient";

export const apiListOrder = (params) => {
  return axiosClient.get(`order?${params}`);
};

export const apiListOrderById = (idOrder) => {
  return axiosClient.get(`order/${idOrder}`);
};

export const apiRemoveOrder = (idOrder) => {
  return updateClient.delete(`order/${idOrder}`);
};

export const apiUpdateOrder = (idOrder) => {
  return updateClient.put(`order/${idOrder}`);
};

export const createOrderApi = (formCreate) => {
  return updateClient.post(`order`, formCreate);
};
