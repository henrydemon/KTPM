const InformationFrame = ({ lastName, name, email, authority, phone }) => {
  return (
    <div className="col-xl-4 order-xl-2">
      <div className="card card-profile">
        <div className="card-body pt-4">
          <div className="text-center">
            <h5 className="h3">{`${lastName} ${name}`}</h5>
            <div className="h5 font-weight-300">
              <i className="ni location_pin mr-2" />
              {email}
            </div>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              Role - {authority}
            </div>
            <div>
              <i className="ni education_hat mr-2" />
              {phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationFrame;
