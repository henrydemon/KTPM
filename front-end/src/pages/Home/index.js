import { connect } from "react-redux";
import Home from "./Home";
import { getListProduct } from "../../store/features/product/selector";
import { fetchListProductBySearch } from "../../store/features/product/action";

const mapStateToProps = (state) => ({
  listProduct: getListProduct(state),
});

const mapDispatchToProps = { fetchListProductBySearch };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
