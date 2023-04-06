import React from "react";
import banner from "../../../assets/img/hero-shop.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section
        className="hero pb-3 bg-cover bg-center d-flex align-items-center"
        style={{ background: `url(${banner})` }}
      >
        <div className="container py-5">
          <div className="row px-4 px-lg-5">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-3">Well come!</h1>
              <Link className="btn btn-dark" to="/shop">
                Visit Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
