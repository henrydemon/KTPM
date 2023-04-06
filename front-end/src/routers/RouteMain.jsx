import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../admin/pages/Login";
import Register from "../admin/pages/Register";
import RoutersAdmin from "../admin/routers";
import ContainerMainLayout from "../layouts";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import History from "../pages/history";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Shop from "../pages/Shop";
import ContainerTest from "../pages/Test";
import { setAccessToken } from "../store/api/axiosClient";

const Routers = ({ token, currentAccount, fetchCurrentAccount }) => {
  useEffect(() => {
    if (token) {
      setAccessToken(token);
      fetchCurrentAccount();
    }
  }, [token, fetchCurrentAccount]);
  return (
    <>
      {token &&
        (currentAccount.role !== 2 ? (
          <RoutersAdmin />
        ) : (
          <ContainerMainLayout>
            <Routes>
              <Route path="/test" element={<ContainerTest />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/detail/:product_id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </ContainerMainLayout>
        ))}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Routers;
