import { useCallback, useState } from "react";
import useFormValidate from "../../../hooks/useFormValidate";
import InputFormGroup from "../../components/InputFormGroup/InputFormGroup";
import Popup from "../../components/Popup/Popup";
import { createStaff as staff } from "../../../store/features/account/action";
import Alert from "../../components/Alert/Alert";

const AddStaffPopup = ({
  showPopup,
  handleClosePopup,
  createStaff,
  fetchListAccount,
}) => {
  let { form, error, InputChange, check } = useFormValidate(
    {
      lastName: "",
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
              <div className="col-lg-6">
                <InputFormGroup
                  nameInput="lastName"
                  showLabel={true}
                  value={form.lastName}
                  handleOnChange={InputChange}
                  nameLabel="Last Name"
                  type="text"
                  placeholder="First name"
                  showError={error.lastName}
                  errorMessage={error.lastName}
                />
              </div>
              <div className="col-lg-6">
                <InputFormGroup
                  nameInput="name"
                  showLabel={true}
                  value={form.name}
                  handleOnChange={InputChange}
                  nameLabel="Name"
                  type="text"
                  placeholder="Name"
                  showError={error.name}
                  errorMessage={error.name}
                />
              </div>
            </div>
            <div className="row">
              <InputFormGroup
                nameInput="email"
                showLabel={true}
                value={form.email}
                handleOnChange={InputChange}
                nameLabel="Email"
                type="text"
                placeholder="jesse@example.com"
                showError={error.email}
                errorMessage={error.email}
              />
              <InputFormGroup
                nameInput="password"
                showLabel={true}
                value={form.password}
                handleOnChange={InputChange}
                nameLabel="Password"
                type="password"
                placeholder="Password"
                showError={error.password}
                errorMessage={error.password}
              />
              <InputFormGroup
                nameInput="phone"
                showLabel={true}
                value={form.phone}
                handleOnChange={InputChange}
                nameLabel="Phone"
                type="text"
                placeholder="Phone"
                showError={error.phone}
                errorMessage={error.phone}
              />
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

export default AddStaffPopup;
