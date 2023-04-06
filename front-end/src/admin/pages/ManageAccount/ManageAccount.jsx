import React, { useEffect, useCallback, useState, useRef } from "react";
import TableBody from "../../components/Table/TableBody";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import TableCell from "../../components/Table/TableCell";
import AddStaffPopup from "./AddStaffPopup";
import style from "./style";
import ConfirmRemove from "./ConfirmRemove";

const dataListFilter = [
  {
    name: "Select Role",
    value: 0,
  },
  {
    name: "Staff",
    value: 1,
  },
  {
    name: "User",
    value: 2,
  },
];

const ManageAccount = ({
  fetchListAccount,
  listUser,
  totalPages,
  currentPage,
  createStaff,
  removeAccount,
}) => {
  const [numberPage, setNumberPage] = useState(1);
  const [filterRole, setFilterRole] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [idItem, setIdItem] = useState(0);
  const [showPopupConfirm, setShowPopupCOnfirm] = useState(false);

  useEffect(() => {
    if (numberPage === 1 && filterRole === 0) {
      fetchListAccount({ page: numberPage, filter: filterRole });
    }
  }, [fetchListAccount, numberPage, filterRole]);

  const handleSelectRole = useCallback(
    (value) => {
      setFilterRole(value);
      fetchListAccount({ page: 1, filter: value });
    },
    [fetchListAccount]
  );

  const handleSelectPage = useCallback(
    (value) => {
      setNumberPage(value);
      fetchListAccount({ page: value, filter: filterRole });
    },
    [fetchListAccount, filterRole]
  );

  const handleShowEdit = useCallback((item) => {
    setShowEdit((showEdit) => !showEdit);
    setIdItem(item.mataikhoan);
  }, []);

  const handleConfirm = useCallback(() => {
    setShowEdit(false);
    setShowPopupCOnfirm(true);
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
            listCol={[
              { title: "Full Name" },
              { title: "Email" },
              { title: "Phone" },
              { title: "Edit" },
            ]}
          />
          <TableRows>
            {listUser.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <h6 className="mb-0 text-sm ps-3">{`${item.holot} ${item.ten}`}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm ps-3">{item.email}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm ps-3">{item.sodienthoai}</h6>
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
                      {idItem === item.mataikhoan && (
                        <div
                          className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow ${
                            showEdit && "show"
                          }`}
                          style={showEdit ? style.dropDownEdit : null}
                        >
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
      <AddStaffPopup
        showPopup={showPopup}
        handleClosePopup={(e) => setShowPopup(e)}
        createStaff={createStaff}
        fetchListAccount={fetchListAccount}
      />
      <ConfirmRemove
        showPopup={showPopupConfirm}
        handleClosePopup={(e) => setShowPopupCOnfirm(e)}
        idAccount={idItem}
        removeAccount={removeAccount}
        fetchListAccount={fetchListAccount}
      />
    </>
  );
};

export default ManageAccount;
