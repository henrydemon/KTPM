import { axiosClient, updateClient } from "../../api/axiosClient";

export const apiListGoods = (params) => {
  return axiosClient.get(`import?${params}`);
};

export const apiListGoodsById = (idGoods) => {
  return axiosClient.get(`import/${idGoods}`);
};

export const apiCreateGoods = (params) => {
  return updateClient.post(`import`, params);
};
