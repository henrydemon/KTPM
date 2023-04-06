import { connect } from "react-redux";
import {
  getCurrentDateDetailGoods,
  getCurrentNameDetailGoods,
  getCurrentTotalAmountGoods,
  getListDetailGoodsById,
} from "../../../store/features/goods/selector";
import { fetchListGoodsById } from "../../../store/features/goods/action";
import DetailGoods from "./DetailGoods";

const mapStateToProps = (state) => ({
  nameStaff: getCurrentNameDetailGoods(state),
  dateGoods: getCurrentDateDetailGoods(state),
  totalAmount: getCurrentTotalAmountGoods(state),
  listDetailGoods: getListDetailGoodsById(state),
});

const mapDispatchToProps = {
  fetchListGoodsById,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailGoods);
