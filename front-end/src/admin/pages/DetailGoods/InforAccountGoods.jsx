import formatMoney from "../../../core/script";

const InforAccountGoods = ({ nameStaff, dateGoods, totalAmount }) => {
  return (
    <>
      <div className="col-xl-3 order-xl-2">
        <div className="card card-profile">
          <div className="card-body pt-4">
            <div className="text-center">
              <h5 className="h3">{nameStaff}</h5>
              <div className="h5 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                {dateGoods}
              </div>
              <div>
                <hr />
                <h3 className="text-danger">Total Amount:</h3>
                <h3 className="text-danger">
                  {formatMoney(totalAmount, "VND")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InforAccountGoods;
