import { useCallback, useState } from "react";
import Alert from "../../components/Alert/Alert";
import Popup from "../../components/Popup/Popup";
import { removeAccount as remove } from "../../../store/features/account/action";

const ConfirmRemove = ({
  showPopup,
  handleClosePopup,
  idAccount,
  removeAccount,
  fetchListAccount,
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

  const handleRemoveAccount = useCallback(async () => {
    const response = await removeAccount(idAccount);
    if (response.type === remove.fulfilled.toString()) {
      setMessage("Remove account success!");
      setType("success");
      setAlert(true);
      handleClosePopup(false);
      fetchListAccount({ page: 1, filter: 1 });
    } else {
      setMessage("Server error, please connect support!");
      setType("danger");
      setAlert(true);
    }
  }, [removeAccount, idAccount, handleClosePopup, fetchListAccount]);

  const handleCloseAlert = useCallback((event) => {
    setAlert(event);
  }, []);
  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Remove Account"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="500px"
        modelBody={`Are you sure remove this account ${idAccount}?`}
        modelFooter={
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleRemoveAccount}
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
