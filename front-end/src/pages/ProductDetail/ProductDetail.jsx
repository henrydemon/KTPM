import React, { useEffect } from "react";
import Detail from "./Detail/Detail";
import DetailTabs from "./DetailTabs/DetailTabs";
import ProductDetailItem from "./ProductDetailItem/ProductDetailItem";
import SliderProduct from "./SliderProduct/SliderProduct";
import { useParams } from "react-router-dom";

const ProductDetail = ({ fetchDetailProduct, detailProduct, addToCart }) => {
  const {product_id} = useParams()

  useEffect(() => {
    fetchDetailProduct(product_id)
  }, [fetchDetailProduct])

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <SliderProduct detailProduct={detailProduct}/>
            {/* PRODUCT DETAILS*/}
            <Detail detailProduct={detailProduct} addToCart={addToCart}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
