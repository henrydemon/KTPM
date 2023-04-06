import { useEffect } from "react";
import ChangeInForAccount from "./ChangeInforAccount";
import ChangePassword from "./ChangePassword";
import HeaderFormInFor from "./HeaderFormInFor";
import InformationFrame from "./InformationFrame";

const MyProfile = ({
  fetchCurrentAccount,
  currentAccount,
  changePassWord,
  changeSaveChangeProfile,
  changStoreProfile,
}) => {
  useEffect(() => {
    fetchCurrentAccount();
  }, [fetchCurrentAccount]);

  return (
    <div className="container-fluid mt--6">
      <div className="row">
        <InformationFrame
          lastName={currentAccount.lastName}
          name={currentAccount.name}
          email={currentAccount.email}
          authority={currentAccount.authority}
          phone={currentAccount.phone}
        />
        <div className="col-xl-8 order-xl-1">
          <div className="card">
            <HeaderFormInFor />
            <div className="card-body">
              <h6 className="heading-small text-muted mb-4">
                User information
              </h6>
              <ChangeInForAccount
                lastName={currentAccount.lastName}
                name={currentAccount.name}
                email={currentAccount.email}
                phone={currentAccount.phone}
                handleSaveChangeP={changeSaveChangeProfile}
                fetchCurrentAccount={fetchCurrentAccount}
                changStoreProfile={changStoreProfile}
              />
              <hr className="my-4" />
              <ChangePassword handleChangePw={changePassWord} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
