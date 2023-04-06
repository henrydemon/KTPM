import React, { useEffect, useState } from "react";
import ItemCart from "./ItemCart";
import OrderPopup from "./OrderPopup";

const CartTable = ({
  fetchListCart,
  listCart,
  totalAmountCart,
  accountCart,
  removeToCart,
  createOrder,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchListCart();
  }, [fetchListCart]);
  return (
    <>
      <div className="col-lg-8 mb-4 mb-lg-0">
        {/* CART TABLE*/}
        <div className="table-responsive mb-4">
          <table className="table text-nowrap">
            <thead className="bg-light">
              <tr>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Product</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Price</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Quantity</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Total</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase" />
                </th>
              </tr>
            </thead>
            <tbody className="border-0">
              <ItemCart
                listCart={listCart}
                removeToCart={removeToCart}
                fetchListCart={fetchListCart}
              />
            </tbody>
          </table>
        </div>
        {/* CART NAV*/}
        <div className="bg-light px-4 py-3">
          <div className="row align-items-center text-center">
            <div className="col-md-6 mb-3 mb-md-0 text-md-start"></div>
            <div className="col-md-6 text-md-end">
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => setShowPopup(true)}
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <OrderPopup
        showPopup={showPopup}
        handleClosePopup={(e) => setShowPopup(e)}
        createOrder={createOrder}
        fetchListCart={fetchListCart}
      />
    </>
  );
};

export default CartTable;
