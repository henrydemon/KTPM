import React, { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ListProduct from "./ListProduct/ListProduct";

const Shop = ({
  fetchListProductBySearch,
  listProduct,
  listCategory,
  listTrademark,
  fetchListCategory,
  fetchListTrademark,
  totalPages,
  currentPage,
}) => {
  useEffect(() => {
    fetchListProductBySearch({ page: 1, cate: 0, trade: 0, status: 1 });
    fetchListCategory({ page: 1, status: 1 });
    fetchListTrademark({ page: 1, status: 1 });
  }, [fetchListProductBySearch, fetchListCategory, fetchListTrademark]);
  return (
    <>
      <div className="container">
        {/* HERO SECTION*/}
        <Breadcrumb name="Shop" />
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              {/* SHOP LISTING*/}
              <ListProduct
                listCategory={listCategory}
                listTrademark={listTrademark}
                listProduct={listProduct}
                totalPages={totalPages}
                currentPage={currentPage}
                fetchListProductBySearch={fetchListProductBySearch}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shop;
