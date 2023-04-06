import { connect } from "react-redux";
import ManageAccount from "./ManageAccount";

import {
  createStaff,
  fetchListAccount,
  removeAccount,
} from "../../../store/features/account/action";
import {
  getCurrentPage,
  getListUser,
  getTotalPages,
} from "../../../store/features/account/selector";

const mapStateToProps = (state) => ({
  listUser: getListUser(state),
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = {
  fetchListAccount,
  createStaff,
  removeAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAccount);
