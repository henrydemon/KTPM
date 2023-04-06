import React, { useCallback } from "react";
import formatMoney from "../../../core/script";

const Detail = ({detailProduct, addToCart}) => {
  const handleClickAddToCard = useCallback(
    (value) => {
      addToCart(value);
    },
    [addToCart]
  );
  return (
    <>
      <div className="col-lg-6">
        <h1>{detailProduct?.tensanpham}</h1>
        <p className="text-muted lead">{formatMoney(detailProduct.gia, "VND")}</p>
        <p className="text-sm mb-4">
          {detailProduct?.mota}
        </p>
        <div className="row align-items-stretch mb-4">
          <div className="col-sm-5 pr-sm-0">
            <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
              <span className="small text-uppercase text-gray mr-4 no-select">
                Quantity
              </span>
              <div className="quantity">
                <input
                  className="form-control border-0 shadow-0 p-0"
                  type="text"
                  defaultValue={1}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3 pl-sm-0">
            <button
              className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
              onClick={() => handleClickAddToCard(detailProduct?.masanpham)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
