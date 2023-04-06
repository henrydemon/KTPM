import { connect } from "react-redux";
import { logoutAccount } from "../../store/features/account/action";
import { getCurrentAccount } from "../../store/features/account/selector";
import ContainerMainLayoutAdmin from "./MainLayoutAdmin/ContainerMainLayoutAdmin";

const mapStateToProps = (state) => ({
  currentAccount: getCurrentAccount(state),
});

const mapDispatchToProps = {
  logoutAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerMainLayoutAdmin);
