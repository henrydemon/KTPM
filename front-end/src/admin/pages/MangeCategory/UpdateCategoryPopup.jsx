import { useCallback, useMemo, useState } from "react";
import useFormValidate from "../../../hooks/useFormValidate";
import InputFormGroup from "../../components/InputFormGroup/InputFormGroup";
import Popup from "../../components/Popup/Popup";
import Alert from "../../components/Alert/Alert";
import { updateCategory as category } from "../../../store/features/category/action";
import { useEffect } from "react";

const UpdateCategoryPopup = ({
  showPopup,
  handleClosePopup,
  currentNameCategory,
  updateCategory,
  idCategory,
  fetchListCategory,
}) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [alert, setAlert] = useState(false);
  const [nameCategory, setNameCategory] = useState(currentNameCategory);

  useEffect(() => {
    setNameCategory(currentNameCategory);
  }, [currentNameCategory]);

  let { form, error, InputChange, check } = useFormValidate(
    {
      name: nameCategory || "",
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

  const handleUpdateCategory = useCallback(async () => {
    let errorObj = check();
    if (Object.keys(errorObj).length === 0) {
      const { name } = form;
      const response = await updateCategory({
        idCategory,
        data: {
          tendanhmuc: name,
        },
      });
      if (response.type === category.fulfilled.toString()) {
        setMessage("Update category success!");
        setType("success");
        setAlert(true);
        handleClosePopup(false);
        fetchListCategory({ page: 1, status: 1 });
      } else if (response.type === category.rejected.toString()) {
        setMessage("Duplicate category name!");
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
    updateCategory,
    handleClosePopup,
    idCategory,
    fetchListCategory,
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
        name="Setting Category"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
          <form>
            <div className="row">
              <InputFormGroup
                nameInput="name"
                showLabel={true}
                value={nameCategory}
                handleOnChange={(e) => {
                  InputChange(e);
                  setNameCategory(e.target.value);
                }}
                nameLabel="Trademark Category"
                type="text"
                placeholder="Trademark Category"
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
            onClick={handleUpdateCategory}
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

export default UpdateCategoryPopup;
