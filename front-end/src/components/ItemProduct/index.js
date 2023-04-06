import { connect } from "react-redux";
import ItemProduct from "./ItemProduct";

import { addToCart } from "../../store/features/cart/action";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemProduct);
