import { connect } from "react-redux";
import MangeTrademark from "./MangeTrademark";
import {
  fetchListTrademark,
  removeTrademark,
  createTrademark,
  saveNameTrademark,
  updateTrademark,
} from "../../../store/features/trademark/action";
import {
  getCurrentNameTrademark,
  getCurrentPage,
  getListTrademark,
  getTotalPages,
} from "../../../store/features/trademark/selector";

const mapStateToProps = (state) => ({
  listTrademark: getListTrademark(state),
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
  currentNameTrademark: getCurrentNameTrademark(state),
});

const mapDispatchToProps = {
  fetchListTrademark,
  removeTrademark,
  createTrademark,
  saveNameTrademark,
  updateTrademark,
};

export default connect(mapStateToProps, mapDispatchToProps)(MangeTrademark);
