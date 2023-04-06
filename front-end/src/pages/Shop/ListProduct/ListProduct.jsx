import React, { useCallback, useEffect, useState } from "react";
import Pagination from "../../../admin/components/Table/Pagination";
import ItemProduct from "../../../components/ItemProduct";

const ListProduct = ({
  listProduct,
  listTrademark,
  listCategory,
  totalPages,
  currentPage,
  fetchListProductBySearch,
}) => {
  const [numberPage, setNumberPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState(0);
  const [filterTrademark, setFilterTrademark] = useState(0);

  const handleSelectPage = useCallback(
    (value) => {
      setNumberPage(value);
      fetchListProductBySearch({
        page: value,
        cate: filterCategory || 0,
        trade: filterTrademark || 0,
        status: 1,
      });
    },
    [fetchListProductBySearch, filterCategory, filterTrademark]
  );

  const handleFilterByTrademark = useCallback(
    (value) => {
      setFilterCategory(value);
      fetchListProductBySearch({ page: 1, cate: 0, trade: value, status: 1 });
    },
    [fetchListProductBySearch]
  );

  const handleFilterByCategory = useCallback(
    (value) => {
      setFilterCategory(value);
      fetchListProductBySearch({ page: 1, cate: value, trade: 0, status: 1 });
    },
    [fetchListProductBySearch]
  );

  return (
    <>
      <div className="col-lg-12 order-1 order-lg-2 mb-5 mb-lg-0">
        <div className="row mb-3 align-items-center">
          <div className="col-lg-6 mb-2 mb-lg-0"></div>
          <div className="col-lg-6">
            <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
              <li className="list-inline-item">
                <select
                  className="selectpicker"
                  data-customclass="form-control form-control-sm"
                  onChange={(e) => handleFilterByTrademark(e.target.value)}
                >
                  <option value="0">Select By Trademark</option>
                  {(listTrademark || []).map((item, index) => {
                    return (
                      <option key={index} value={item.mathuonghieu}>
                        {item.tenthuonghieu}
                      </option>
                    );
                  })}
                </select>
              </li>
              <li className="list-inline-item">
                <select
                  className="selectpicker"
                  data-customclass="form-control form-control-sm"
                  onChange={(e) => handleFilterByCategory(e.target.value)}
                >
                  <option value="0">Select By Category</option>
                  {(listCategory || []).map((item, index) => {
                    return (
                      <option key={index} value={item.madanhmuc}>
                        {item.tendanhmuc}
                      </option>
                    );
                  })}
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <ItemProduct listProduct={listProduct} />
        </div>
        {/* PAGINATION*/}
        {/* <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center justify-content-lg-end">
            <li className="page-item mx-1">
              <a className="page-link" href="#!" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item mx-1 active">
              <a className="page-link" href="#!">
                1
              </a>
            </li>
            <li className="page-item mx-1">
              <a className="page-link" href="#!">
                2
              </a>
            </li>
            <li className="page-item mx-1">
              <a className="page-link" href="#!">
                3
              </a>
            </li>
            <li className="page-item ms-1">
              <a className="page-link" href="#!" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav> */}
        <Pagination
          totalPages={totalPages}
          activePage={currentPage}
          handleSelect={(e) => {
            handleSelectPage(e);
          }}
        />
      </div>
    </>
  );
};

export default ListProduct;
