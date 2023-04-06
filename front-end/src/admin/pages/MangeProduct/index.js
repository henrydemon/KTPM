import { connect } from "react-redux";
import { getListCategory } from "../../../store/features/category/selector";
import {
  getCurrentPage,
  getListProduct,
  getTotalPages,
} from "../../../store/features/product/selector";
import { getListTrademark } from "../../../store/features/trademark/selector";
import ManageProduct from "./ManageProduct";
import {
  fetchListProductBySearch,
  removeProduct,
} from "../../../store/features/product/action";

const mapStateToProps = (state) => ({
  listProduct: getListProduct(state),
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
  listCategory: getListCategory(state),
  listTrademark: getListTrademark(state),
});

const mapDispatchToProps = {
  fetchListProductBySearch,
  removeProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);
