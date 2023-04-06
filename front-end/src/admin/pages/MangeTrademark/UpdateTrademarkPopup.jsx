import { useCallback, useMemo, useState } from "react";
import useFormValidate from "../../../hooks/useFormValidate";
import InputFormGroup from "../../components/InputFormGroup/InputFormGroup";
import Popup from "../../components/Popup/Popup";
import Alert from "../../components/Alert/Alert";
import { updateTrademark as trademark } from "../../../store/features/trademark/action";
import { useEffect } from "react";

const UpdateTrademarkPopup = ({
  showPopup,
  handleClosePopup,
  currentNameTrademark,
  updateTrademark,
  idTrademark,
  fetchListTrademark,
}) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [alert, setAlert] = useState(false);
  const [nameTrademark, setNameTrademark] = useState(currentNameTrademark);

  useEffect(() => {
    setNameTrademark(currentNameTrademark);
  }, [currentNameTrademark]);

  let { form, error, InputChange, check } = useFormValidate(
    {
      name: nameTrademark || "",
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

  const handleUpdateTrademark = useCallback(async () => {
    let errorObj = check();
    if (Object.keys(errorObj).length === 0) {
      const { name } = form;
      const response = await updateTrademark({
        idTrademark,
        data: {
          tenthuonghieu: name,
        },
      });
      if (response.type === trademark.fulfilled.toString()) {
        setMessage("Update trademark success!");
        setType("success");
        setAlert(true);
        handleClosePopup(false);
        fetchListTrademark({ page: 1, status: 1 });
      } else if (response.type === trademark.rejected.toString()) {
        setMessage("Duplicate brand name!");
        setType("danger");
        setAlert(true);
      } else {
        setMessage("Server error, please connect support!");
        setType("danger");
        setAlert(true);
      }
    }
  }, [
    check,
    form,
    updateTrademark,
    handleClosePopup,
    idTrademark,
    fetchListTrademark,
  ]);

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
        name="Setting Trademark"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
          <form>
            <div className="row">
              <InputFormGroup
                nameInput="name"
                showLabel={true}
                value={nameTrademark}
                handleOnChange={(e) => {
                  InputChange(e);
                  setNameTrademark(e.target.value);
                }}
                nameLabel="Trademark Name"
                type="text"
                placeholder="Trademark Name"
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
            onClick={handleUpdateTrademark}
          >
            Update
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

export default UpdateTrademarkPopup;
