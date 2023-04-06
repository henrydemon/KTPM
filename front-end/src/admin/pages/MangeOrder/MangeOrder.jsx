import { useCallback, useEffect, useState } from "react";
import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import TableRows from "../../components/Table/TableRows";
import style from "./style";
import { Link } from "react-router-dom";
import ConfirmRemove from "./ConfirmRemove";
import formatMoney from "../../../core/script";
import { updateOrder as update } from "../../../store/features/order/action";
import Alert from "../../components/Alert/Alert";

const dataListFilter = [
  {
    name: "No precess",
    value: 0,
  },
  {
    name: "Processed",
    value: 1,
  },
  {
    name: "Delivering",
    value: 2,
  },
  {
    name: "Delivered",
    value: 3,
  },
  {
    name: "Completed",
    value: 4,
  },
];

const MangeOrder = ({
  listOrder,
  fetchListOrder,
  totalPages,
  currentPage,
  currentNameOrder,
  saveNameOrder,
  removeOrder,
  updateOrder,
  currentAccount,
}) => {
  const [numberPage, setNumberPage] = useState(1);
  const [filterSale, setFilterSale] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const [idItem, setIdItem] = useState(0);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [alert, setAlert] = useState(false);
  const [showPopupConfirm, setShowPopupCOnfirm] = useState(false);

  useEffect(() => {
    if (numberPage === 1 && filterSale === 0) {
      fetchListOrder({ page: numberPage, filter: filterSale });
    }
  }, [fetchListOrder, numberPage, filterSale]);

  const handleSelectPage = useCallback(
    (value) => {
      setNumberPage(value);
      fetchListOrder({ page: value, filter: filterSale });
    },
    [fetchListOrder, filterSale]
  );

  const handleSelectRole = useCallback(
    (value) => {
      setFilterSale(value);
      fetchListOrder({ page: 1, filter: value });
    },
    [fetchListOrder]
  );

  const handleShowEdit = useCallback(
    (item) => {
      setShowEdit((showEdit) => !showEdit);
      setIdItem(item.madonhang);
      saveNameOrder(item.hoten);
    },
    [saveNameOrder]
  );

  const statusOrder = (status) => {
    if (status === 0) {
      return (
        <span className="badge badge-dot mr-4">
          <i className="bg-warning" />
          <b className="mb-0 text-sm text-warning">No precess</b>
        </span>
      );
    } else if (status === 1) {
      return (
        <span className="badge badge-dot mr-4">
          <i className="bg-success" />
          <b className="mb-0 text-sm text-success">Processed</b>
        </span>
      );
    } else if (status === 2) {
      return (
        <span className="badge badge-dot mr-4">
          <i className="bg-warning" />
          <b className="mb-0 text-sm text-warning">Delivering</b>
        </span>
      );
    } else if (status === 3) {
      return (
        <span className="badge badge-dot mr-4">
          <i className="bg-danger" />
          <b className="mb-0 text-sm text-danger">Delivered</b>
        </span>
      );
    } else if (status === 4) {
      return (
        <span className="badge badge-dot mr-4">
          <i className="bg-success" />
          <b className="mb-0 text-sm text-success">Completed</b>
        </span>
      );
    }
  };

  const handleUpdateOrder = useCallback(
    async (idItem) => {
      const response = await updateOrder(idItem);
      if (response.type === update.fulfilled.toString()) {
        setMessage("Update order success!");
        setType("success");
        setAlert(true);
        setShowEdit(false);
        fetchListOrder({ page: 1, filter: 3 });
      } else if (response.type === update.rejected.toString()) {
        setMessage("The number of products is not enough to supply!");
        setType("danger");
        setAlert(true);
        setShowEdit(false);
      } else {
        setMessage("Server error, please connect support!");
        setType("danger");
        setAlert(true);
        setShowEdit(false);
      }
    },
    [updateOrder, fetchListOrder]
  );

  const handleCloseAlert = useCallback((value) => {
    setAlert(value);
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
        />
        <TableBody>
          <TableCol
            listCol={[
              { title: "Name User" },
              { title: "Status" },
              { title: "Total Amount" },
              { title: "Phone" },
              { title: "Email" },
              { title: "Address" },
              { title: "Edit" },
            ]}
          />
          <TableRows>
            {(listOrder || []).map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{`${item.hoten}`}</h6>
                  </TableCell>
                  <TableCell>{statusOrder(item.trangthai)}</TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm text-info">
                      {formatMoney(item.tongtien, "VND")}
                    </h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{`${item.sodienthoai}`}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{`${item.email}`}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{`${item.diachi} ${item.quanhuyen} ${item.tinhthanh}`}</h6>
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
                      {idItem === item.madonhang && (
                        <div
                          className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow ${
                            showEdit && "show"
                          }`}
                          style={showEdit ? style.dropDownEdit : null}
                        >
                          <Link
                            className="dropdown-item"
                            to={`/admin/${item.madonhang}/order`}
                          >
                            <i className="fa fa-search text-primary"></i>
                            <b className="text-primary">Detail</b>
                          </Link>
                          {currentAccount.role === 1 &&
                          item.trangthai === 0 ? null : (
                            <button
                              className="dropdown-item"
                              onClick={() => handleUpdateOrder(item.madonhang)}
                            >
                              <i className="ni ni-check-bold text-success"></i>
                              <b className="text-success">Update Cart</b>
                            </button>
                          )}

                          {currentAccount.role === 0 && item.trangthai === 0 && (
                            <button
                              className="dropdown-item"
                              onClick={() => handleConfirm()}
                            >
                              <i className="fa fa-trash text-danger"></i>
                              <b className="text-danger">Reject</b>
                            </button>
                          )}
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
      <Alert
        message={message}
        type={type}
        handleClose={(e) => handleCloseAlert(e)}
        show={alert}
        styleTop="0"
      />
      <ConfirmRemove
        showPopup={showPopupConfirm}
        handleClosePopup={(e) => setShowPopupCOnfirm(e)}
        idOrder={idItem}
        removeOrder={removeOrder}
        fetchListOrder={fetchListOrder}
        currentNameOrder={currentNameOrder}
      />
    </>
  );
};

export default MangeOrder;
