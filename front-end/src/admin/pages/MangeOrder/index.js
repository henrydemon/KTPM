import { connect } from "react-redux";
import {
  getCurrentNameOrder,
  getCurrentPage,
  getListOrder,
  getTotalPages,
} from "../../../store/features/order/selector";
import MangeOrder from "./MangeOrder";
import {
  fetchListOrder,
  saveNameOrder,
  removeOrder,
  updateOrder,
} from "../../../store/features/order/action";
import { getCurrentAccount } from "../../../store/features/account/selector";

const mapStateToProps = (state) => ({
  listOrder: getListOrder(state),
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
  currentNameOrder: getCurrentNameOrder(state),
  currentAccount: getCurrentAccount(state),
});

const mapDispatchToProps = {
  fetchListOrder,
  saveNameOrder,
  removeOrder,
  updateOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(MangeOrder);
