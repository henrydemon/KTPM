import { axiosClient, updateClient } from "../../api/axiosClient";

export const apiListCategory = (params) => {
  return axiosClient.get(`category?${params}`);
};

export const apiRemoveCategory = (idCategory) => {
  return updateClient.delete(`category/${idCategory}`);
};

export const createCategoryApi = (formCreate) => {
  return updateClient.post(`category`, formCreate);
};

export const apiUpdateCategory = (formUpdate) => {
  return updateClient.put(`category/${formUpdate.idCategory}`, formUpdate.data);
};
