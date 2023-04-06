import { useCallback, useState } from "react";
import { removeCategory as remove } from "../../../store/features/category/action";
import Alert from "../../components/Alert/Alert";
import Popup from "../../components/Popup/Popup";

const ConfirmRemove = ({
  showPopup,
  handleClosePopup,
  idCategory,
  removeCategory,
  fetchListCategory,
  currentNameCategory,
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

  const handleRemoveCategory = useCallback(async () => {
    const response = await removeCategory(idCategory);
    if (response.type === remove.fulfilled.toString()) {
      setMessage("Remove category success!");
      setType("success");
      setAlert(true);
      handleClosePopup(false);
      fetchListCategory({ page: 1, status: 1 });
    } else {
      setMessage("Server error, please connect support!");
      setType("danger");
      setAlert(true);
    }
  }, [removeCategory, idCategory, handleClosePopup, fetchListCategory]);

  const handleCloseAlert = useCallback((event) => {
    setAlert(event);
  }, []);
  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Remove Category"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="500px"
        modelBody={`Are you sure remove this category ${currentNameCategory}?`}
        modelFooter={
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleRemoveCategory}
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
