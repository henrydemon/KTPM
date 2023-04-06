import formatMoney from "../../../core/script";

const InforUserOrder = ({ nameUser, emailUser, toTAlAmount, addressUser }) => {
  return (
    <>
      <div className="col-xl-3 order-xl-2">
        <div className="card card-profile">
          <div className="card-body pt-4">
            <div className="text-center">
              <h5 className="h3">{nameUser}</h5>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {emailUser}
              </div>
              <div className="h5 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                {addressUser}
              </div>
              <div>
                <hr />
                <h3 className="text-danger">Total Amount:</h3>
                <h3 className="text-danger">
                  {formatMoney(toTAlAmount, "VND")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InforUserOrder;
