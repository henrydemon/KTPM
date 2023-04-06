import { useCallback, useState } from "react";
import useFormValidate from "../../../hooks/useFormValidate";
import InputFormGroup from "../../components/InputFormGroup/InputFormGroup";
import Popup from "../../components/Popup/Popup";
import { createStaff as staff } from "../../../store/features/account/action";
import Alert from "../../components/Alert/Alert";
import SelectCategory from "../AddNewGoods/SelectCategory";

const AddProductPopup = ({
  showPopup,
  handleClosePopup,
  createStaff,
  fetchListAccount,
  listCategory,
  listTrademark,
}) => {
  let { form, error, InputChange, check } = useFormValidate(
    {
      nameProduct: "",
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    {
      rule: {
        lastName: {
          required: true,
        },
        name: {
          required: true,
        },
        email: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
          max: 32,
        },
        phone: {
          required: true,
          pattern: "phone",
        },
      },
      message: {
        lastName: {
          required: "Last name not be empty",
        },
        name: {
          required: "Name not be empty",
        },
        email: {
          required: "Email not be empty",
          pattern: "Email invalidate",
        },
        password: {
          required: "Password not be empty",
        },
        phone: {
          required: "Phone not be empty",
          pattern: "Phone invalidate",
        },
      },
    }
  );

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [alert, setAlert] = useState(false);
  const [filterTrademark, setFilterTrademark] = useState(1);
  const [filterCategory, setFilterCategory] = useState(1);

  const handleCreateStaff = useCallback(async () => {
    let errorObj = check();
    if (Object.keys(errorObj).length === 0) {
      const { lastName, name, email, password, phone } = form;
      const response = await createStaff({
        params: {
          holot: lastName,
          ten: name,
          email,
          password,
          sodienthoai: phone,
        },
      });
      form.lastName = "";
      form.name = "";
      form.email = "";
      form.password = "";
      form.phone = "";
      if (response.type === staff.fulfilled.toString()) {
        setMessage("Create staff success!");
        setType("success");
        setAlert(true);
        handleClosePopup(false);
        fetchListAccount({ page: 1, filter: 1 });
      } else if (response.type === staff.fulfilled.toString()) {
        setMessage("Phone number or email already used!");
        setType("danger");
        setAlert(true);
      } else {
        setMessage("Server error, please connect support!");
        setType("danger");
        setAlert(true);
      }
    }
  }, [check, form, createStaff, handleClosePopup, fetchListAccount]);

  const handleCloseAlert = useCallback((event) => {
    setAlert(event);
  }, []);

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Add Staff"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
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
                  onChange={(e) => {
                    setFilterTrademark(e.target.value);
                  }}
                >
                  {(listTrademark || []).map((item, index) => {
                    return (
                      <option key={index} value={item.mathuonghieu}>
                        {item.tenthuonghieu}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group">
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="form-control-label"
                >
                  Category
                </label>
                <select className="form-control" id="exampleFormControlSelect1">
                  {(listCategory || []).map((item, index) => {
                    return (
                      <option key={index} value={item.madanhmuc}>
                        {item.tendanhmuc}
                      </option>
                    );
                  })}
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
        }
        modelFooter={
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCreateStaff}
          >
            Create
          </button>
        }
      />
      <Alert
        message={message}
        type={type}
        handleClose={(e) => handleCloseAlert(e)}
        show={alert}
        styleTop="0"
      />
    </>
  );
};

export default AddProductPopup;
