import React from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { AuthGoogle } from "../../hooks/AuthGoogle";

const Header = ({ logoutAccount, listCart }) => {
  console.log("🚀 ~ file: Header.jsx ~ line 7 ~ Header ~ listCart", listCart);
  const handleLogout = useCallback(() => {
    logoutAccount();
  }, [logoutAccount]);

  return (
    <>
      <header className="header bg-white">
        <div className="container px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
            <Link className="navbar-brand" to="/home">
              <span className="fw-bold text-uppercase text-dark">
                Gear Shop
              </span>
            </Link>
            <button
              className="navbar-toggler navbar-toggler-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  {/* Link*/}
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    {" "}
                    <i className="fas fa-dolly-flatbed me-1 text-gray" />
                    Cart
                    <small className="text-gray fw-normal">
                      {`(${listCart.length})`}
                    </small>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" href="#!">
                    {" "}
                    <i className="far fa-heart me-1" />
                    <small className="text-gray fw-normal"> (0)</small>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/history">
                    {" "}
                    <i className="fas fa-user me-1 text-gray fw-normal" />
                    History
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={handleLogout}>
                    {" "}
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
