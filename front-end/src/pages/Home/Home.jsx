import React from "react";
import Popup from "../../components/Popup";
import Banner from "./Banner/Banner";
import HomeProduct from "./HomeProduct/HomeProduct";

const Home = ({ listProduct, fetchListProductBySearch }) => {
  return (
    <>
      <Popup />
      <Banner />
      <HomeProduct
        listProduct={listProduct}
        fetchListProductBySearch={fetchListProductBySearch}
      />
    </>
  );
};

export default Home;
