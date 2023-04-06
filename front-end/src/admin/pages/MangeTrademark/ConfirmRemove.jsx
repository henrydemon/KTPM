import { useCallback, useState } from "react";
import Alert from "../../components/Alert/Alert";
import Popup from "../../components/Popup/Popup";
import { removeTrademark as remove } from "../../../store/features/trademark/action";

const ConfirmRemove = ({
  showPopup,
  handleClosePopup,
  idTrademark,
  removeTrademark,
  fetchListTrademark,
  currentNameTrademark,
}) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [alert, setAlert] = useState(false);

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  const handleRemoveTrademark = useCallback(async () => {
    const response = await removeTrademark(idTrademark);
    if (response.type === remove.fulfilled.toString()) {
      setMessage("Remove trademark success!");
      setType("success");
      setAlert(true);
      handleClosePopup(false);
      fetchListTrademark({ page: 1, status: 1 });
    } else {
      setMessage("Server error, please connect support!");
      setType("danger");
      setAlert(true);
    }
  }, [removeTrademark, idTrademark, handleClosePopup, fetchListTrademark]);

  const handleCloseAlert = useCallback((event) => {
    setAlert(event);
  }, []);
  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Remove Trademark"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="500px"
        modelBody={`Are you sure remove this trademark ${currentNameTrademark}?`}
        modelFooter={
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleRemoveTrademark}
          >
            Remove
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

export default ConfirmRemove;
