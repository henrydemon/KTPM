import { useCallback, useState } from "react";
import useFormValidate from "../../../hooks/useFormValidate";
import { changePassWord as changePw } from "../../../store/features/account/action";
import InputFormGroup from "../../components/InputFormGroup/InputFormGroup";
import Alert from "../../components/Alert/Alert";
const ChangePassword = ({ handleChangePw }) => {
  let { form, error, InputChange, check } = useFormValidate(
    {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    {
      rule: {
        oldPassword: {
          required: true,
        },
        newPassword: {
          required: true,
          min: 6,
          max: 32,
        },
        confirmPassword: {
          required: true,
          min: 6,
          max: 32,
        },
      },
      message: {
        oldPassword: {
          required: "Password not be empty",
        },
        newPassword: {
          required: "Password not be empty",
        },
        confirmPassword: {
          required: "Password not be empty",
        },
      },
    }
  );

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [alert, setAlert] = useState(false);

  const handleChangePassword = useCallback(async () => {
    let errorObj = check();
    if (Object.keys(errorObj).length === 0) {
      const { oldPassword, newPassword, confirmPassword } = form;
      const response = await handleChangePw({
        params: {
          password: oldPassword,
          newPassword: newPassword,
          rePassword: confirmPassword,
        },
      });
      form.oldPassword = "";
      form.newPassword = "";
      form.confirmPassword = "";
      if (response.type === changePw.fulfilled.toString()) {
        setMessage("Change password success!");
        setType("success");
        setAlert(true);
      } else {
        setMessage("Server error, please connect support!");
        setType("danger");
        setAlert(true);
      }
    }
  }, [handleChangePw, check, form]);

  const handleCloseAlert = useCallback((value) => {
    setAlert(value);
  }, []);

  return (
    <>
      <h6 className="heading-small text-muted mb-4">Change Password</h6>
      <div className="pl-lg-4">
        <div className="row">
          <div className="col-md-12">
            <InputFormGroup
              nameInput="oldPassword"
              showLabel={true}
              value={form.oldPassword}
              handleOnChange={InputChange}
              nameLabel="Old Password"
              type="password"
              placeholder="Old Password"
              showError={error.oldPassword}
              errorMessage={error.oldPassword}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <InputFormGroup
              nameInput="newPassword"
              showLabel={true}
              value={form.newPassword}
              handleOnChange={InputChange}
              nameLabel="New Password"
              type="password"
              placeholder="New Password"
              showError={error.newPassword}
              errorMessage={error.newPassword}
            />
          </div>
          <div className="col-lg-6">
            <InputFormGroup
              nameInput="confirmPassword"
              showLabel={true}
              value={form.confirmPassword}
              handleOnChange={InputChange}
              nameLabel="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              showError={error.confirmPassword}
              errorMessage={error.confirmPassword}
            />
          </div>
        </div>
        <div className="text-right mt-3">
          <button className="btn btn-primary" onClick={handleChangePassword}>
            Change password
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

export default ChangePassword;
