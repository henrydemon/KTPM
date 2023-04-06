import { connect } from "react-redux";
import {
  getCurrentPage,
  getListProduct,
  getTotalPages,
} from "../../store/features/product/selector";
import Shop from "./Shop";
import { fetchListProductBySearch } from "../../store/features/product/action";
import { getListCategory } from "../../store/features/category/selector";
import { getListTrademark } from "../../store/features/trademark/selector";
import { fetchListCategory } from "../../store/features/category/action";
import { fetchListTrademark } from "../../store/features/trademark/action";

const mapStateToProps = (state) => ({
  listProduct: getListProduct(state),
  listCategory: getListCategory(state),
  listTrademark: getListTrademark(state),
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = {
  fetchListProductBySearch,
  fetchListCategory,
  fetchListTrademark,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
