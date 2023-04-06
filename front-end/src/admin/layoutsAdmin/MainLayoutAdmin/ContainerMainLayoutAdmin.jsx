import React from "react";
import Header from "./Header/Header";

import SideBar from "./SideBar/SideBar";

const ContainerMainLayoutAdmin = ({
  children,
  currentAccount,
  logoutAccount,
}) => {
  return (
    <>
      <div className="g-sidenav-show g-sidenav-pinned">
        <SideBar currentAccount={currentAccount} />
        <div className="main-content" id="panel">
          <Header
            currentAccount={currentAccount}
            logoutAccount={logoutAccount}
          />
          <div className="container-fluid mt--6">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ContainerMainLayoutAdmin;
