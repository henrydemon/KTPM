import React from "react";

import style from "../style";
import logoSideBar from "../../../assets/img/logo-ct-dark.png";
import { Link } from "react-router-dom";
import ItemSideBar from "./ItemSideBar";

const dataItem = [
  {
    name: "Mange Account",
    icon: "single-02",
    color: "text-warning",
    link: "/admin/account",
  },
  {
    name: "Mange Product",
    icon: "app",
    color: "text-success",
    link: "/admin/product",
  },
  {
    name: "Mange Category",
    icon: "align-left-2",
    color: "text-info",
    link: "/admin/category",
  },
  {
    name: "Mange Trademark",
    icon: "bullet-list-67",
    color: "text-default",
    link: "/admin/trademark",
  },
  {
    name: "Mange Order",
    icon: "cart",
    color: "text-danger",
    link: "/admin/order",
  },
  {
    name: "Mange Goods",
    icon: "delivery-fast",
    color: "text-info",
    link: "/admin/goods",
  },
];

const SideBar = ({ currentAccount }) => {
  return (
    <>
      <nav
        className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
        id="sidenav-main"
      >
        <div
          className="scroll-wrapper scrollbar-inner"
          style={{ position: "relative" }}
        >
          <div
            className="scrollbar-inner scroll-content scroll-scrolly_visible"
            style={{
              height: "auto",
              marginBottom: "0px",
              marginRight: "0px",
              maxHeight: "620px",
            }}
          >
            <div
              className="sidenav-header  align-items-center"
              style={style.position}
            >
              <Link className="navbar-brand">
                <img
                  src={logoSideBar}
                  className="navbar-brand-img h-100"
                  style={style.maxWidth}
                  alt="main_logo"
                />
                <span className="ms-1 font-weight-bold">Web Gear Gaming</span>
              </Link>
            </div>
            <hr className="my-3" />
            <div className="navbar-inner">
              <div
                className="collapse navbar-collapse"
                id="sidenav-collapse-main"
              >
                <ul className="navbar-nav">
                  <ItemSideBar
                    listItem={dataItem}
                    currentAccount={currentAccount}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
