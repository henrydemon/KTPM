import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import OrderTotal from "./OrderTotal/OrderTotal";
import CartTable from "./TableCart/CartTable";

const Cart = ({
  fetchListCart,
  listCart,
  totalAmountCart,
  accountCart,
  removeToCart,
  createOrder,
}) => {
  return (
    <>
      <div>
        {/* HERO SECTION*/}
        <Breadcrumb name="Cart" />
        <section className="py-5">
          <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
          <div className="row">
            <CartTable
              fetchListCart={fetchListCart}
              listCart={listCart}
              removeToCart={removeToCart}
              createOrder={createOrder}
            />
            {/* ORDER TOTAL*/}
            <OrderTotal
              totalAmountCart={totalAmountCart}
              accountCart={accountCart}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
