import { connect } from "react-redux";
import { getListOrder } from "../../store/features/order/selector";
import History from "./History";
import { fetchListOrder, removeOrder } from "../../store/features/order/action";

const mapStateToProps = (state) => ({
  listOrder: getListOrder(state),
});

const mapDispatchToProps = { fetchListOrder, removeOrder };

export default connect(mapStateToProps, mapDispatchToProps)(History);
