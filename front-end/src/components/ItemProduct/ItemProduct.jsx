import React from "react";
import { useCallback } from "react";

// import img from "../../assets/img/cat-img-1.jpg";
import formatMoney from "../../core/script";
import { Link } from "react-router-dom";

const ItemProduct = ({ listProduct, addToCart }) => {
  const handleClickAddToCard = useCallback(
    (value) => {
      addToCart(value);
    },
    [addToCart]
  );

  return (
    <>
      {listProduct.map((item, index) => {
        return (
          <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <Link className="d-block" to={`/detail/${item.masanpham}`}>
                  <img
                    className="img-fluid w-100"
                    src={`./Anh/${item.anh[0].tenhinhanh}`}
                    alt="..."
                  />
                </Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <button
                        className="btn btn-sm btn-dark"
                        onClick={() => handleClickAddToCard(item.masanpham)}
                      >
                        Add to cart
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                {" "}
                <Link className="reset-anchor" to={`/detail/${item.masanpham}`}>
                  {item.tensanpham}
                </Link>
              </h6>
              <p className="small text-muted">{formatMoney(item.gia, "VND")}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemProduct;
