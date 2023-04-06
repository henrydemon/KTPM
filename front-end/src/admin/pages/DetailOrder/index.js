import { connect } from "react-redux";
import DetailsOrder from "./DetailsOrder";
import { fetchListOrderById } from "../../../store/features/order/action";
import {
  getCurrentAddressDetailOrder,
  getCurrentEmailDetailOrder,
  getCurrentNameDetailOrder,
  getCurrentTotalAmountOrder,
  getListDetailOrderById,
} from "../../../store/features/order/selector";

const mapStateToProps = (state) => ({
  nameUser: getCurrentNameDetailOrder(state),
  emailUser: getCurrentEmailDetailOrder(state),
  addressUser: getCurrentAddressDetailOrder(state),
  toTAlAmount: getCurrentTotalAmountOrder(state),
  getListDetailOrderById: getListDetailOrderById(state),
});

const mapDispatchToProps = {
  fetchListOrderById,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsOrder);
