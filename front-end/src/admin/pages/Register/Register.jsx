import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginAccount as login } from "../../../store/features/account/action";

import style from "./style";

const Register = ({ loginAccount, currentAccount }) => {
  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [sodienthoaidInput, setSodienthoaidInput] = useState("");
  const [holotInput, setHolotInput] = useState("");
  const [tenInput, setTenInput] = useState("");
  const [messageLogin, setMessageLogin] = useState("");
  const [colorText, setColorText] = useState("");

  const handleRegister = useCallback(async () => {
    const response = await loginAccount({
      params: { email: emailInput, password: passwordInput, holot: holotInput, ten: tenInput, sodienthoai: sodienthoaidInput },
    });
    if (response.type === login.fulfilled.toString()) {
      console.log(response);
      setColorText("text-success");
      if (currentAccount.role !== 2) {
        navigate(`/admin/product`);
      }
      if (currentAccount.role === 2) {
        navigate(`/home`);
      }
    } else {
      setMessageLogin("Wrong account or password");
      setColorText("text-danger");
    }
  }, [loginAccount, emailInput, passwordInput, navigate, currentAccount]);

  return (
    <>
      <div className="bg-default g-sidenav-hidden">
        <div className="main-content" style={style.bgHeight}>
          <div className="header bg-gradient-primary py-5">
            <div className="container">
              <div className="header-body text-center mb-7">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                    <h1 className="text-white">Welcome!</h1>
                    <p className="text-lead text-white">
                      Use these awesome forms to register.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt--8 pb-5">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-7">
                <div className="card bg-secondary border-0 mb-0">
                  <div className="card-body px-lg-5 py-lg-5">
                    <div
                      className="text-center text-muted"
                      style={style.marginBottom}
                    >
                      <small>Register with credentials</small>
                    </div>
                    <form>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-merge input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-email-83" />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Email"
                            type="email"
                            onChange={(e) => {
                              setEmailInput(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-merge input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-lock-circle-open" />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Password"
                            type="password"
                            onChange={(e) => {
                              setPasswordInput(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-merge input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-circle-08" />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Ho lot"
                            type="text"
                            onChange={(e) => {
                              setHolotInput(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-merge input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-circle-08" />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Ten"
                            type="text"
                            onChange={(e) => {
                              setTenInput(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group input-group-merge input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-mobile-button" />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Phone"
                            type="text"
                            onChange={(e) => {
                              setSodienthoaidInput(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-left mt-3">
                        <span className={colorText}>{messageLogin}</span>
                      </div>

                      <div className="text-center">
                        <button
                          type="button"
                          className="btn btn-primary my-4"
                          onClick={handleRegister}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
