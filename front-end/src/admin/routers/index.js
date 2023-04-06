import { connect } from "react-redux";
import {
  getCurrentAccount,
  getToken,
} from "../../store/features/account/selector";
import { fetchCurrentAccount } from "../../store/features/account/action";

import RoutersAdmin from "./RoutersAdmin";

const mapStateToProps = (state) => ({
  token: getToken(state),
  currentAccount: getCurrentAccount(state),
});

const mapDispatchToProps = {
  fetchCurrentAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoutersAdmin);
