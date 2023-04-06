import { connect } from "react-redux";
import {
  getCurrentPage,
  getListGoods,
  getTotalPages,
} from "../../../store/features/goods/selector";
import MangeGoods from "./MangeGoods";
import { fetchListGoods } from "../../../store/features/goods/action";

const mapStateToProps = (state) => ({
  listGoods: getListGoods(state),
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = {
  fetchListGoods,
};

export default connect(mapStateToProps, mapDispatchToProps)(MangeGoods);
