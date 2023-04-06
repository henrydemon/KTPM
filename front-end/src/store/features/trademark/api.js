import { axiosClient, updateClient } from "../../api/axiosClient";

export const apiListTrademark = (params) => {
  return axiosClient.get(`trademark?${params}`);
};

export const apiRemoveTrademark = (idTrademark) => {
  return updateClient.delete(`trademark/${idTrademark}`);
};

export const createTrademarkApi = (formCreate) => {
  return updateClient.post(`trademark`, formCreate);
};

export const apiUpdateTrademark = (formUpdate) => {
  return updateClient.put(
    `trademark/${formUpdate.idTrademark}`,
    formUpdate.data
  );
};
