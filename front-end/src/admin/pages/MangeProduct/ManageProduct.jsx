import TableBody from "../../components/Table/TableBody";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import TableCell from "../../components/Table/TableCell";
import SelectCategory from "../AddNewGoods/SelectCategory";
import SelectTrademark from "../AddNewGoods/SelectTrademark";
import formatMoney from "../../../core/script";
import { useCallback, useEffect, useState } from "react";
import style from "./style";
import ConfirmRemove from "./ConfirmRemove";
import AddProductPopup from "./AddProductPopup";
import { Link } from "react-router-dom";

const ManageProduct = ({
  totalPages,
  currentPage,
  listProduct,
  listCategory,
  listTrademark,
  fetchListProductBySearch,
  removeProduct,
}) => {
  const [numberPage, setNumberPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState(0);
  const [filterTrademark, setFilterTrademark] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [idItem, setIdItem] = useState(0);
  const [showPopupConfirm, setShowPopupCOnfirm] = useState(false);

  useEffect(() => {
    if (numberPage === 1 && filterCategory === 0 && filterTrademark === 0)
      fetchListProductBySearch({
        page: numberPage,
        cate: filterCategory,
        trade: filterTrademark,
        status: 1,
      });
  }, [fetchListProductBySearch, numberPage, filterCategory, filterTrademark]);

  const handleSelectPage = useCallback(
    (value) => {
      setNumberPage(value);
      fetchListProductBySearch({
        page: value,
        cate: filterCategory || 0,
        trade: filterTrademark || 0,
        status: 1,
      });
    },
    [fetchListProductBySearch, filterCategory, filterTrademark]
  );

  const handleFilterByCategory = useCallback(
    (value) => {
      setFilterCategory(value);
      fetchListProductBySearch({ page: 1, cate: value, trade: 0, status: 1 });
    },
    [fetchListProductBySearch]
  );

  const handleFilterByTrademark = useCallback(
    (value) => {
      setFilterTrademark(value);
      fetchListProductBySearch({ page: 1, cate: 0, trade: value, status: 1 });
    },
    [fetchListProductBySearch]
  );

  const handleShowEdit = useCallback((item) => {
    setShowEdit((showEdit) => !showEdit);
    setIdItem(item.masanpham);
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
          showNewButton={true}
          handleShowPopup={(e) => {
            setShowPopup(e);
          }}
          component={
            <>
              <SelectCategory
                listDataOption={listCategory}
                handleSelect={(e) => handleFilterByCategory(e)}
              />
              <SelectTrademark
                listDataOption={listTrademark}
                handleSelect={(e) => handleFilterByTrademark(e)}
              />
            </>
          }
        />
        <TableBody>
          <TableCol
            listCol={[
              { title: "Name Product" },
              { title: "Price" },
              { title: "Edit" },
            ]}
          />
          <TableRows>
            {(listProduct || []).map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{`${item.tensanpham}`}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm text-info">
                      {formatMoney(item.gia, "VND")}
                    </h6>
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
                      {idItem === item.masanpham && (
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

                          <Link
                            className="dropdown-item"
                            to={`/admin/${item.masanpham}/product`}
                          >
                            <i className="fa fa-search text-primary"></i>
                            <b className="text-primary">Detail</b>
                          </Link>
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
        idProduct={idItem}
        removeProduct={removeProduct}
        fetchListProductBySearch={fetchListProductBySearch}
      />
      <AddProductPopup
        showPopup={showPopup}
        handleClosePopup={(e) => setShowPopup(e)}
        listCategory={listCategory}
        listTrademark={listTrademark}
        // createStaff={createStaff}
        // fetchListProductBySearch={fetchListProductBySearch}
      />
    </>
  );
};

export default ManageProduct;
