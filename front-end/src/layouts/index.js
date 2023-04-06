import { connect } from "react-redux";
import ContainerMainLayout from "./MainLayout/ContainerMainLayout";
import { logoutAccount } from "../store/features/account/action";
import { getListCart } from "../store/features/cart/selector";

const mapStateToProps = (state) => ({
  listCart: getListCart(state),
});

const mapDispatchToProps = {
  logoutAccount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerMainLayout);
