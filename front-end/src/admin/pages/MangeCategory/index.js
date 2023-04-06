import { connect } from "react-redux";
import MangeCategory from "./MangeCategory";
import {
  fetchListCategory,
  saveNameCategory,
  removeCategory,
  createCategory,
  updateCategory,
} from "../../../store/features/category/action";
import {
  getCurrentNameCategory,
  getCurrentPage,
  getListCategory,
  getTotalPages,
} from "../../../store/features/category/selector";
const mapStateToProps = (state) => ({
  listCategory: getListCategory(state),
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
  currentNameCategory: getCurrentNameCategory(state),
});

const mapDispatchToProps = {
  fetchListCategory,
  saveNameCategory,
  removeCategory,
  createCategory,
  updateCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(MangeCategory);
