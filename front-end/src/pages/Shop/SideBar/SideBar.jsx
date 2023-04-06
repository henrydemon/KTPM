import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="col-lg-3 order-2 order-lg-1">
        <h5 className="text-uppercase mb-4">Categories</h5>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="customRadio"
            id="radio_1"
          />
          <label className="form-check-label" htmlFor="radio_1">
            All Listings
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="customRadio"
            id="radio_2"
          />
          <label className="form-check-label" htmlFor="radio_2">
            Best Offer
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="customRadio"
            id="radio_3"
          />
          <label className="form-check-label" htmlFor="radio_3">
            Auction
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="customRadio"
            id="radio_4"
          />
          <label className="form-check-label" htmlFor="radio_4">
            Buy It Now
          </label>
        </div>
        <h5 className="text-uppercase mb-4">Categories</h5>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="customRadio"
            id="radio_1"
          />
          <label className="form-check-label" htmlFor="radio_1">
            All Listings
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="customRadio"
            id="radio_2"
          />
          <label className="form-check-label" htmlFor="radio_2">
            Best Offer
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="customRadio"
            id="radio_3"
          />
          <label className="form-check-label" htmlFor="radio_3">
            Auction
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="customRadio"
            id="radio_4"
          />
          <label className="form-check-label" htmlFor="radio_4">
            Buy It Now
          </label>
        </div>
      </div>
    </>
  );
};

export default SideBar;
