import { useCallback, useState } from "react";
import Alert from "../../components/Alert/Alert";
import Popup from "../../components/Popup/Popup";
import { removeOrder as remove } from "../../../store/features/order/action";

const ConfirmRemove = ({
  showPopup,
  handleClosePopup,
  idOrder,
  removeOrder,
  fetchListOrder,
  currentNameOrder,
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
    const response = await removeOrder(idOrder);
    if (response.type === remove.fulfilled.toString()) {
      setMessage("Remove order success!");
      setType("success");
      setAlert(true);
      handleClosePopup(false);
      fetchListOrder({ page: 1, filter: 0 });
    } else {
      setMessage("You don't Staff");
      setType("danger");
      setAlert(true);
    }
  }, [removeOrder, idOrder, handleClosePopup, fetchListOrder]);

  const handleCloseAlert = useCallback((event) => {
    setAlert(event);
  }, []);
  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Remove Order"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="500px"
        modelBody={`Are you sure remove this order of ${currentNameOrder}?`}
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
