import { useCallback, useState } from "react";
import useFormValidate from "../../../hooks/useFormValidate";
import InputFormGroup from "../../components/InputFormGroup/InputFormGroup";

import { changeSaveChangeProfile as changeProfile } from "../../../store/features/account/action";
import Alert from "../../components/Alert/Alert";

const ChangeInForAccount = ({
  lastName,
  name,
  email,
  phone,
  handleSaveChangeP,
  changStoreProfile,
}) => {
  let { form, error, InputChange, check } = useFormValidate(
    {
      lname: lastName || "",
      fname: name || "",
      ophone: phone || "",
    },
    {
      rule: {
        lname: {
          required: true,
        },
        fname: {
          required: true,
        },
        ophone: {
          required: true,
          pattern: "phone",
        },
      },
      message: {
        lname: {
          required: "Last name not be empty",
        },
        fname: {
          required: "Name not be empty",
        },
        ophone: {
          required: "Phone not be empty",
          pattern: "Phone invalidate",
        },
      },
    }
  );

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [alert, setAlert] = useState(false);

  const handleSaveChanges = useCallback(async () => {
    let errorObj = check();
    if (Object.keys(errorObj).length === 0) {
      const { lname, fname, ophone } = form;
      const response = await handleSaveChangeP({
        params: {
          holot: lname,
          ten: fname,
          sodienthoai: ophone,
        },
      });
      changStoreProfile({ holot: lname, ten: fname, sodienthoai: ophone });
      if (response.type === changeProfile.fulfilled.toString()) {
        setMessage("Change password success!");
        setType("success");
        setAlert(true);
      } else {
        setMessage("Server error, please connect support!");
        setType("danger");
        setAlert(true);
      }
    }
  }, [check, form, handleSaveChangeP, changStoreProfile]);

  const handleCloseAlert = useCallback((value) => {
    setAlert(value);
  }, []);

  return (
    <>
      <div className="pl-lg-4">
        <div className="row">
          <div className="col-lg-6">
            <InputFormGroup
              nameInput="lname"
              showLabel={true}
              defaultValue={lastName || form.lname}
              handleOnChange={InputChange}
              nameLabel="Last Name"
              type="text"
              placeholder="Last name"
              showError={error.lname}
              errorMessage={error.lname}
            />
          </div>
          <div className="col-lg-6">
            <InputFormGroup
              nameInput="fname"
              showLabel={true}
              defaultValue={name || form.fname}
              handleOnChange={InputChange}
              nameLabel="Name"
              type="text"
              placeholder="Name"
              showError={error.fname}
              errorMessage={error.fname}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <InputFormGroup
              disabled={true}
              nameInput="Email"
              showLabel={true}
              value={email}
              nameLabel="Email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="col-lg-12">
            <InputFormGroup
              nameInput="ophone"
              showLabel={true}
              defaultValue={phone || form.ophone}
              handleOnChange={InputChange}
              nameLabel="Phone"
              type="text"
              placeholder="Phone"
              showError={error.ophone}
              errorMessage={error.ophone}
            />
          </div>
        </div>
        <div className="text-right mt-3">
          <button className="btn btn-primary" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </div>
      <Alert
        message={message}
        type={type}
        handleClose={(e) => handleCloseAlert(e)}
        show={alert}
        styleTop="-22vh"
      />
    </>
  );
};

export default ChangeInForAccount;
