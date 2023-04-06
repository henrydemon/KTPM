import { useCallback, useEffect, useState } from "react";
import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import TableRows from "../../components/Table/TableRows";
import AddCategoryPopup from "./AddCategoryPopup";
import ConfirmRemove from "./ConfirmRemove";
import style from "./style";
import UpdateCategoryPopup from "./UpdateCategoryPopup";

const dataListFilter = [
  {
    name: "Still for sale",
    value: 1,
  },
  {
    name: "Sold out",
    value: 0,
  },
];

const MangeCategory = ({
  fetchListCategory,
  listCategory,
  totalPages,
  currentPage,
  currentNameCategory,
  saveNameCategory,
  removeCategory,
  createCategory,
  updateCategory,
}) => {
  const [numberPage, setNumberPage] = useState(1);
  const [filterSale, setFilterSale] = useState(1);
  const [idItem, setIdItem] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const [showPopupConfirm, setShowPopupCOnfirm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupUpdate, setShowPopupUpdate] = useState(false);

  useEffect(() => {
    if (numberPage === 1 && filterSale === 1) {
      fetchListCategory({ page: numberPage, status: filterSale });
    }
  }, [fetchListCategory, numberPage, filterSale]);

  const handleShowEdit = useCallback(
    (item) => {
      setShowEdit((showEdit) => !showEdit);
      setIdItem(item.madanhmuc);
      saveNameCategory(item.tendanhmuc);
    },
    [saveNameCategory]
  );

  const handleConfirm = useCallback(() => {
    setShowEdit(false);
    setShowPopupCOnfirm(true);
  }, []);

  const handleSelectRole = useCallback(
    (value) => {
      setFilterSale(value);
      fetchListCategory({ page: 1, status: value });
    },
    [fetchListCategory]
  );

  const handleSelectPage = useCallback(
    (value) => {
      setNumberPage(value);
      fetchListCategory({ page: value, status: filterSale });
    },
    [fetchListCategory, filterSale]
  );

  const handleUpdateCategory = useCallback(() => {
    setShowEdit(false);
    setShowPopupUpdate(true);
  }, []);

  return (
    <>
      <TableContainer
        showPagination={true}
        totalPages={totalPages}
        activePage={currentPage}
        handleSelect={(e) => {
          handleSelectPage(e);
        }}
      >
        <TableHeader
          nameTable="Table Account"
          show={true}
          listDataOption={dataListFilter}
          handleSelect={(e) => {
            handleSelectRole(e);
          }}
          showNewButton={true}
          handleShowPopup={(e) => {
            setShowPopup(e);
          }}
        />
        <TableBody>
          <TableCol listCol={[{ title: "Name Category" }, { title: "Edit" }]} />
          <TableRows>
            {listCategory.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <h6 className="mb-0 text-sm ps-3">{`${item.tendanhmuc}`}</h6>
                  </TableCell>
                  <TableCell>
                    <div className="dropdown">
                      <button
                        className="btn btn-sm btn-icon-only text-light"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => handleShowEdit(item)}
                      >
                        <i className="fas fa-ellipsis-v" />
                      </button>
                      {idItem === item.madanhmuc && (
                        <div
                          className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow ${
                            showEdit && "show"
                          }`}
                          style={showEdit ? style.dropDownEdit : null}
                        >
                          <button
                            className="dropdown-item"
                            onClick={() => handleUpdateCategory()}
                          >
                            <i className="ni ni-ruler-pencil text-warning"></i>
                            <b className="text-warning">Update</b>
                          </button>
                          <button
                            className="dropdown-item"
                            onClick={() => handleConfirm()}
                          >
                            <i className="fa fa-trash text-danger"></i>
                            <b className="text-danger">Remove</b>
                          </button>
                        </div>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableRows>
        </TableBody>
      </TableContainer>
      <ConfirmRemove
        showPopup={showPopupConfirm}
        handleClosePopup={(e) => setShowPopupCOnfirm(e)}
        idCategory={idItem}
        currentNameCategory={currentNameCategory}
        removeCategory={removeCategory}
        fetchListCategory={fetchListCategory}
      />
      <AddCategoryPopup
        showPopup={showPopup}
        handleClosePopup={(e) => setShowPopup(e)}
        createCategory={createCategory}
        fetchListCategory={fetchListCategory}
      />
      <UpdateCategoryPopup
        showPopup={showPopupUpdate}
        handleClosePopup={(e) => {
          setShowPopupUpdate(e);
        }}
        idCategory={idItem}
        currentNameCategory={currentNameCategory}
        updateCategory={updateCategory}
        fetchListCategory={fetchListCategory}
      />
    </>
  );
};

export default MangeCategory;
