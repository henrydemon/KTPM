import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ContainerMainLayoutAdmin from "../layoutsAdmin";
import Login from "../pages/Login";
import ManageAccount from "../pages/ManageAccount";
import ManageProduct from "../pages/MangeProduct";
import TestAdmin from "../pages/TestAdmin";
import { setAccessToken } from "../../store/api/axiosClient";
import MyProfile from "../pages/MyProfile";
import MangeTrademark from "../pages/MangeTrademark";
import MangeCategory from "../pages/MangeCategory";
import MangeOrder from "../pages/MangeOrder";
import DetailsOrder from "../pages/DetailOrder";
import MangeGoods from "../pages/MangeGoods";
import DetailGoods from "../pages/DetailGoods";
import AddNewGoods from "../pages/AddNewGoods";
import DetailProduct from "../pages/DetailProduct";

const RoutersAdmin = ({ token, currentAccount, fetchCurrentAccount }) => {
  useEffect(() => {
    if (token) {
      setAccessToken(token);
      fetchCurrentAccount();
    }
  }, [token, fetchCurrentAccount]);

  return (
    <>
      {/* {token && (currentAccount.role === 0 || 1) ? ( */}
      <ContainerMainLayoutAdmin>
        <Routes>
          <Route path="/admin/test" element={<TestAdmin />} />
          {currentAccount.authority === "Admin" && (
            <Route path="/admin/account" element={<ManageAccount />} />
          )}
          <Route path="/admin/product" element={<ManageProduct />} />
          <Route path="/admin/:id/product" element={<DetailProduct />} />
          <Route path="/admin/myProfile" element={<MyProfile />} />
          <Route path="/admin/trademark" element={<MangeTrademark />} />
          <Route path="/admin/category" element={<MangeCategory />} />
          <Route path="/admin/order" element={<MangeOrder />} />
          <Route path="/admin/:id/order" element={<DetailsOrder />} />
          <Route path="/admin/goods" element={<MangeGoods />} />
          <Route path="/admin/:id/goods" element={<DetailGoods />} />
          <Route path="/admin/goods/new" element={<AddNewGoods />} />
        </Routes>
      </ContainerMainLayoutAdmin>
      {/* ) : (
        <Routes>
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      )} */}
    </>
  );
};

export default RoutersAdmin;
