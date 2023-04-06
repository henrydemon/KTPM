import { connect } from "react-redux";

import Login from "./Login";
import {
  loginAccount,
  saveToken,
} from "../../../store/features/account/action";
import {
  getCurrentAccount,
  getMessageLogin,
} from "../../../store/features/account/selector";

const mapStateToProps = (state) => ({
  messageLogin: getMessageLogin(state),
  currentAccount: getCurrentAccount(state),
});

const mapDispatchToProps = {
  loginAccount,
  saveToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
