import { useCallback, useState } from "react";
import useFormValidate from "../../../hooks/useFormValidate";
import InputFormGroup from "../../components/InputFormGroup/InputFormGroup";
import Popup from "../../components/Popup/Popup";
import Alert from "../../components/Alert/Alert";
import { createCategory as category } from "../../../store/features/category/action";

const AddCategoryPopup = ({
  showPopup,
  handleClosePopup,
  createCategory,
  fetchListCategory,
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

  const handleCreateCategory = useCallback(async () => {
    let errorObj = check();
    if (Object.keys(errorObj).length === 0) {
      const { name } = form;
      const response = await createCategory({
        params: {
          tendanhmuc: name,
        },
      });
      form.name = "";
      if (response.type === category.fulfilled.toString()) {
        setMessage("Create category success!");
        setType("success");
        setAlert(true);
        handleClosePopup(false);
        fetchListCategory({ page: 1, status: 1 });
      } else if (response.type === category.rejected.toString()) {
        setMessage("Category name already exists!");
        setType("danger");
        setAlert(true);
      } else {
        setMessage("Server error, please connect support!");
        setType("danger");
        setAlert(true);
      }
    }
  }, [check, form, createCategory, handleClosePopup, fetchListCategory]);

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
        name="Add Category"
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
                nameLabel="Name Category"
                type="text"
                placeholder="Name Category"
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
            onClick={handleCreateCategory}
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

export default AddCategoryPopup;
