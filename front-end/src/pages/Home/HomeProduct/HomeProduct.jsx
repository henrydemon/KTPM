import React, { useEffect } from "react";
import ItemProduct from "../../../components/ItemProduct";

const HomeProduct = ({ listProduct, fetchListProductBySearch }) => {
  useEffect(() => {
    fetchListProductBySearch({
      page: 1,
      cate: 0,
      trade: 0,
      status: 1,
    });
  }, [fetchListProductBySearch]);

  return (
    <>
      <section className="py-5">
        <div className="row">
          <ItemProduct listProduct={listProduct} />
        </div>
      </section>
    </>
  );
};

export default HomeProduct;
