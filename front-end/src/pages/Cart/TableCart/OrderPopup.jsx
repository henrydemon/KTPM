import { useCallback, useState } from "react";
import Alert from "../../../admin/components/Alert/Alert";
import InputFormGroup from "../../../admin/components/InputFormGroup/InputFormGroup";
import Popup from "../../../admin/components/Popup/Popup";
import useFormValidate from "../../../hooks/useFormValidate";
import { createOrder as order } from "../../../store/features/order/action";

const OrderPopup = ({
  showPopup,
  handleClosePopup,
  createOrder,
  fetchListCart,
}) => {
  let { form, error, InputChange, check } = useFormValidate(
    {
      fullName: "",
      phone: "",
      email: "",
      ward: "",
      city: "",
      address: "",
    },
    {
      rule: {
        fullName: {
          required: true,
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        email: {
          required: true,
          pattern: "email",
        },
        ward: {
          required: true,
        },
        city: {
          required: true,
        },
        address: {
          required: true,
        },
      },
      message: {
        fullName: {
          required: "Full name not be empty",
        },
        ward: {
          required: "Ward not be empty",
        },
        city: {
          required: "City not be empty",
        },
        address: {
          required: "Address not be empty",
        },
        email: {
          required: "Email not be empty",
          pattern: "Email invalidate",
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
      const { fullName, ward, city, address, email, phone } = form;
      const response = await createOrder({
        params: {
          hoten: fullName,
          email: email,
          sodienthoai: phone,
          diachi: address,
          tinhthanh: city,
          quanhuyen: ward,
        },
      });
      form.fullName = "";
      form.address = "";
      form.city = "";
      form.ward = "";
      form.email = "";
      form.phone = "";
      if (response.type === order.fulfilled.toString()) {
        setMessage("Create staff success!");
        setType("success");
        setAlert(true);
        handleClosePopup(false);
        fetchListCart();
      } else if (response.type === order.fulfilled.toString()) {
        setMessage("Phone number or email already used!");
        setType("danger");
        setAlert(true);
      } else {
        setMessage("Server error, please connect support!");
        setType("danger");
        setAlert(true);
      }
    }
  }, [check, form, createOrder, handleClosePopup, fetchListCart]);

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
        name="Order Information"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
          <form>
            <div className="row">
              <div className="col-lg-6">
                <InputFormGroup
                  nameInput="fullName"
                  showLabel={true}
                  value={form.fullName}
                  handleOnChange={InputChange}
                  nameLabel="Full Name"
                  type="text"
                  placeholder="Full Name"
                  showError={error.fullName}
                  errorMessage={error.fullName}
                />
              </div>
              <div className="col-lg-6">
                <InputFormGroup
                  nameInput="email"
                  showLabel={true}
                  value={form.email}
                  handleOnChange={InputChange}
                  nameLabel="Email"
                  type="email"
                  placeholder="Email"
                  showError={error.email}
                  errorMessage={error.email}
                />
              </div>
            </div>
            <div className="row">
              <InputFormGroup
                nameInput="address"
                showLabel={true}
                value={form.address}
                handleOnChange={InputChange}
                nameLabel="Address"
                type="text"
                showError={error.address}
                errorMessage={error.address}
              />
              <InputFormGroup
                nameInput="ward"
                showLabel={true}
                value={form.ward}
                handleOnChange={InputChange}
                nameLabel="Ward"
                type="text"
                placeholder="Ward"
                showError={error.ward}
                errorMessage={error.ward}
              />
              <InputFormGroup
                nameInput="city"
                showLabel={true}
                value={form.city}
                handleOnChange={InputChange}
                nameLabel="City"
                type="text"
                placeholder="city"
                showError={error.city}
                errorMessage={error.city}
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
            Order
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

export default OrderPopup;
