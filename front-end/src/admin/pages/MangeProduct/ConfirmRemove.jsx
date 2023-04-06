import { useCallback, useState } from "react";
import Alert from "../../components/Alert/Alert";
import Popup from "../../components/Popup/Popup";
import { removeProduct as remove } from "../../../store/features/product/action";

const ConfirmRemove = ({
  showPopup,
  handleClosePopup,
  idProduct,
  removeProduct,
  fetchListProductBySearch,
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
    const response = await removeProduct(idProduct);
    if (response.type === remove.fulfilled.toString()) {
      setMessage("Remove product success!");
      setType("success");
      setAlert(true);
      handleClosePopup(false);
      fetchListProductBySearch({ page: 1, cate: 0, trade: 0, status: 1 });
    } else {
      setMessage("Server error, please connect support!");
      setType("danger");
      setAlert(true);
    }
  }, [removeProduct, idProduct, handleClosePopup, fetchListProductBySearch]);

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
        modelBody={`Are you sure remove this product ${idProduct}?`}
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
