import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const ContainerMainLayout = ({ children, logoutAccount, listCart }) => {
  return (
    <>
      <div className="container">
        <Header logoutAccount={logoutAccount} listCart={listCart} />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default ContainerMainLayout;
