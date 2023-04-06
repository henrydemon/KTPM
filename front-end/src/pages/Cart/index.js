import { connect } from "react-redux";
import Cart from "./Cart";
import { fetchListCart, removeToCart } from "../../store/features/cart/action";
import {
  getAccountCart,
  getListCart,
  getTotalAmount,
} from "../../store/features/cart/selector";
import { createOrder } from "../../store/features/order/action";

const mapStateToProps = (state) => ({
  listCart: getListCart(state),
  totalAmountCart: getTotalAmount(state),
  accountCart: getAccountCart(state),
});

const mapDispatchToProps = {
  fetchListCart,
  removeToCart,
  createOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
