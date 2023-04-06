import { useCallback, useState } from "react";
import useFormValidate from "../../../hooks/useFormValidate";
import InputFormGroup from "../../components/InputFormGroup/InputFormGroup";
import Popup from "../../components/Popup/Popup";
import Alert from "../../components/Alert/Alert";
import { createTrademark as trademark } from "../../../store/features/trademark/action";

const AddTrademarkPopup = ({
  showPopup,
  handleClosePopup,
  createTrademark,
  fetchListTrademark,
}) => {
  let { form, error, InputChange, check } = useFormValidate(
    {
      name: "",
    },
    {
      rule: {
        name: {
          required: true,
        },
      },
      message: {
        name: {
          required: "Name not be empty",
        },
      },
    }
  );

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [alert, setAlert] = useState(false);

  const handleCreateTrademark = useCallback(async () => {
    let errorObj = check();
    if (Object.keys(errorObj).length === 0) {
      const { name } = form;
      const response = await createTrademark({
        params: {
          tenthuonghieu: name,
        },
      });
      form.name = "";
      if (response.type === trademark.fulfilled.toString()) {
        setMessage("Create trademark success!");
        setType("success");
        setAlert(true);
        handleClosePopup(false);
        fetchListTrademark({ page: 1, status: 1 });
      } else if (response.type === trademark.rejected.toString()) {
        setMessage("Brand name already exists!");
        setType("danger");
        setAlert(true);
      } else {
        setMessage("Server error, please connect support!");
        setType("danger");
        setAlert(true);
      }
    }
  }, [check, form, createTrademark, handleClosePopup, fetchListTrademark]);

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
        name="Add Trademark"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
          <form>
            <div className="row">
              <InputFormGroup
                nameInput="name"
                showLabel={true}
                value={form.name}
                handleOnChange={InputChange}
                nameLabel="Name Trademark"
                type="text"
                placeholder="Name Trademark"
                showError={error.name}
                errorMessage={error.name}
              />
            </div>
          </form>
        }
        modelFooter={
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCreateTrademark}
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

export default AddTrademarkPopup;
