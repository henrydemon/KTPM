import { axiosClient, updateClient } from "../../api/axiosClient";

export const apiListCart = () => {
  return axiosClient.get(`cart`);
};

export const apiAdToCart = (idProduct) => {
  return updateClient.post(`cart/${idProduct}`);
};

export const apiRemoveToCart = (idProduct) => {
  return updateClient.delete(`cart/${idProduct}`);
};

// export const createCategoryApi = (formCreate) => {
//   return updateClient.post(`category`, formCreate);
// };

// export const apiUpdateCategory = (formUpdate) => {
//   return updateClient.put(`category/${formUpdate.idCategory}`, formUpdate.data);
// };
