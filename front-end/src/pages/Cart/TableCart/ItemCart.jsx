import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import formatMoney from "../../../core/script";

const ItemCart = ({ listCart, removeToCart, fetchListCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [idItem, setIdItem] = useState();

  const handleClickRemove = useCallback(
    (value) => {
      fetchListCart();
      removeToCart(value);
    },
    [removeToCart, fetchListCart]
  );

  const handleAddQuantity = useCallback(
    (value, id) => {
      const index = listCart.findIndex((item) => item.masanpham === id);
      const newArray = listCart.fill(({ soluong: value }, index, index + 1));
      console.log(newArray);
    },
    [listCart]
  );

  return (
    <>
      {listCart.map((item, index) => {
        return (
          <tr key={index}>
            <th className="ps-0 py-3 border-light" scope="row">
              <div className="d-flex align-items-center">
                <a
                  className="reset-anchor d-block animsition-link"
                  href="detail.html"
                >
                  <img
                    src={`./Anh/${item.anh[0].tenhinhanh}`}
                    alt="..."
                    width={70}
                  />
                </a>
                <div className="ms-3">
                  <strong className="h6">
                    <span className="reset-anchor animsition-link">
                      {item.tensanpham}
                    </span>
                  </strong>
                </div>
              </div>
            </th>
            <td className="p-3 align-middle border-light">
              <p className="mb-0 small">{formatMoney(item.dongia, "VND")}</p>
            </td>
            <td className="p-3 align-middle border-light">
              <div className="border d-flex align-items-center justify-content-between px-3">
                <span className="small text-uppercase text-gray headings-font-family">
                  Quantity
                </span>
                <div className="quantity">
                  <input
                    className="form-control form-control-sm border-0 shadow-0 p-0"
                    type="text"
                    defaultValue={item.soluong}
                    onChange={(e) => {
                      handleAddQuantity(e.target.value, item.masanpham);
                    }}
                  />
                </div>
              </div>
            </td>
            <td className="p-3 align-middle border-light">
              <p className="mb-0 small">{formatMoney(item.thanhtien, "VND")}</p>
            </td>
            <td className="p-3 align-middle border-light">
              <span
                className="reset-anchor cursor-pointer"
                onClick={() => handleClickRemove(item.masanpham)}
              >
                <i className="fas fa-trash-alt small text-muted" />
              </span>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ItemCart;
