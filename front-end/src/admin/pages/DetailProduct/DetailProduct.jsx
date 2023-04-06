import InputFormGroup from "../../components/InputFormGroup/InputFormGroup";

const DetailProduct = () => {
  return (
    <>
      <div className="col-xl-12 order-xl-1">
        <div className="card">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col-8">
                <h3 className="mb-0">Edit Product </h3>
              </div>
              <div className="col-4 text-right">
                <button className="btn btn-sm btn-primary">Update</button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <InputFormGroup
                    nameInput="nameProduct"
                    showLabel={true}
                    // value={form.lastName}
                    // handleOnChange={InputChange}
                    nameLabel="Name Product"
                    type="text"
                    placeholder="Name Product"
                    // showError={error.lastName}
                    // errorMessage={error.lastName}
                  />
                </div>
                <div className="col-lg-6">
                  <InputFormGroup
                    nameInput="Price"
                    showLabel={true}
                    // value={form.name}
                    // handleOnChange={InputChange}
                    nameLabel="Price"
                    type="text"
                    placeholder="Price"
                    // showError={error.name}
                    // errorMessage={error.name}
                  />
                </div>
                <div className="col-lg-6">
                  <InputFormGroup
                    nameInput="Sale"
                    showLabel={true}
                    // value={form.name}
                    // handleOnChange={InputChange}
                    nameLabel="Sale"
                    type="text"
                    placeholder="Sale"
                    // showError={error.name}
                    // errorMessage={error.name}
                  />
                </div>
              </div>
              <div className="row">
                <form>
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="form-control-label"
                  >
                    Image
                  </label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFileLang"
                      lang="en"
                    />
                    <label htmlFor="customFileLang">Select file</label>
                  </div>
                </form>

                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    style={{ marginTop: "20px" }}
                    className="form-control-label"
                  >
                    Trademark
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    // onChange={(e) => {
                    //   setFilterTrademark(e.target.value);
                    // }}
                  >
                    {/* {(listTrademark || []).map((item, index) => {
                      return (
                        <option key={index} value={item.mathuonghieu}>
                          {item.tenthuonghieu}
                        </option>
                      );
                    })} */}
                  </select>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="form-control-label"
                  >
                    Category
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    {/* {(listCategory || []).map((item, index) => {
                      return (
                        <option key={index} value={item.madanhmuc}>
                          {item.tendanhmuc}
                        </option>
                      );
                    })} */}
                  </select>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-control-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
