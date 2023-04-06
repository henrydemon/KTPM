import { connect } from "react-redux";
import {
  getCurrentPage,
  getListProduct,
  getTotalPages,
} from "../../../store/features/product/selector";
import AddNewGoods from "./AddNewGoods";
import { fetchListProductBySearch } from "../../../store/features/product/action";
import { getListCategory } from "../../../store/features/category/selector";
import { getListTrademark } from "../../../store/features/trademark/selector";
import {
  addNewGoodsToOrder,
  createGoods,
} from "../../../store/features/goods/action";
import { getArrayGoods } from "../../../store/features/goods/selector";

const mapStateToProps = (state) => ({
  listProduct: getListProduct(state),
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
  listCategory: getListCategory(state),
  listTrademark: getListTrademark(state),
  listGoods: getArrayGoods(state),
});

const mapDispatchToProps = {
  fetchListProductBySearch,
  addNewGoodsToOrder,
  createGoods,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewGoods);
