import { axiosClient, updateClient } from "../../api/axiosClient";

export const apiListAccount = (params) => {
  return axiosClient.get(`user?${params}`);
};

export const apiLoginAccount = (formLogin) => {
  return updateClient.post(`user/login`, formLogin);
};

export const createStaffApi = (formCreate) => {
  return updateClient.post(`user/add`, formCreate);
};

export const apiCurrentAccount = () => {
  return axiosClient.get("user/currentdetail");
};

export const apiChangePassword = (formChangePassword) => {
  return updateClient.put("user/password", formChangePassword);
};

export const apiSaveChangeProfile = (formChangeProfile) => {
  return updateClient.put("user", formChangeProfile);
};

export const apiRemoveAccount = (idAccount) => {
  return updateClient.delete(`user/${idAccount}`);
};
