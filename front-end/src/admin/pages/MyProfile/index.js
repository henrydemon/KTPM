import { connect } from "react-redux";
import MyProfile from "./MyProfile";

import {
  changePassWord,
  fetchCurrentAccount,
  changeSaveChangeProfile,
  changStoreProfile,
} from "../../../store/features/account/action";
import { getCurrentAccount } from "../../../store/features/account/selector";

const mapStateToProps = (state) => ({
  currentAccount: getCurrentAccount(state),
});

const mapDispatchToProps = {
  fetchCurrentAccount,
  changePassWord,
  changeSaveChangeProfile,
  changStoreProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
