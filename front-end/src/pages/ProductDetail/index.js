import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
import { fetchDetailProduct } from '../../store/features/product/action'
import { getDetailProduct } from "../../store/features/product/selector";
import { addToCart } from "../../store/features/cart/action";

const mapStateToProps = (state) => ({
    detailProduct: getDetailProduct(state)
});

const mapDispatchToProps = {
    fetchDetailProduct,
    addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
