import { useCallback, useEffect, useState } from "react";
import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import TableRows from "../../components/Table/TableRows";
import AddTrademarkPopup from "./AddTrademarkPopup";
import ConfirmRemove from "./ConfirmRemove";
import style from "./style";
import UpdateTrademarkPopup from "./UpdateTrademarkPopup";

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

const MangeTrademark = ({
  fetchListTrademark,
  listTrademark,
  totalPages,
  currentPage,
  removeTrademark,
  createTrademark,
  saveNameTrademark,
  currentNameTrademark,
  updateTrademark,
}) => {
  const [numberPage, setNumberPage] = useState(1);
  const [filterSale, setFilterSale] = useState(1);
  const [showEdit, setShowEdit] = useState(false);
  const [idItem, setIdItem] = useState(0);
  const [showPopupConfirm, setShowPopupCOnfirm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupUpdate, setShowPopupUpdate] = useState(false);

  useEffect(() => {
    if (numberPage === 1 && filterSale === 1) {
      fetchListTrademark({ page: numberPage, status: filterSale });
    }
  }, [fetchListTrademark, numberPage, filterSale]);

  const handleSelectPage = useCallback(
    (value) => {
      setNumberPage(value);
      fetchListTrademark({ page: value, status: filterSale });
    },
    [fetchListTrademark, filterSale]
  );

  const handleSelectRole = useCallback(
    (value) => {
      setFilterSale(value);
      fetchListTrademark({ page: 1, status: value });
    },
    [fetchListTrademark]
  );

  const handleShowEdit = useCallback(
    (item) => {
      setShowEdit((showEdit) => !showEdit);
      setIdItem(item.mathuonghieu);
      saveNameTrademark(item.tenthuonghieu);
    },
    [saveNameTrademark]
  );

  const handleConfirm = useCallback(() => {
    setShowEdit(false);
    setShowPopupCOnfirm(true);
  }, []);

  const handleUpdateTrademark = useCallback(() => {
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
          <TableCol
            listCol={[{ title: "Name Trademark" }, { title: "Edit" }]}
          />
          <TableRows>
            {listTrademark.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <h6 className="mb-0 text-sm ps-3">{`${item.tenthuonghieu}`}</h6>
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
                      {idItem === item.mathuonghieu && (
                        <div
                          className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow ${
                            showEdit && "show"
                          }`}
                          style={showEdit ? style.dropDownEdit : null}
                        >
                          <button
                            className="dropdown-item"
                            onClick={() => handleUpdateTrademark()}
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
      <AddTrademarkPopup
        showPopup={showPopup}
        handleClosePopup={(e) => setShowPopup(e)}
        createTrademark={createTrademark}
        fetchListTrademark={fetchListTrademark}
      />
      <ConfirmRemove
        showPopup={showPopupConfirm}
        handleClosePopup={(e) => setShowPopupCOnfirm(e)}
        idTrademark={idItem}
        currentNameTrademark={currentNameTrademark}
        removeTrademark={removeTrademark}
        fetchListTrademark={fetchListTrademark}
      />
      <UpdateTrademarkPopup
        showPopup={showPopupUpdate}
        handleClosePopup={(e) => {
          setShowPopupUpdate(e);
        }}
        idTrademark={idItem}
        currentNameTrademark={currentNameTrademark}
        updateTrademark={updateTrademark}
        fetchListTrademark={fetchListTrademark}
      />
    </>
  );
};

export default MangeTrademark;
