import TableBody from "../../admin/components/Table/TableBody";
import TableCell from "../../admin/components/Table/TableCell";
import TableCol from "../../admin/components/Table/TableCol";
import TableContainer from "../../admin/components/Table/TableContainer";
import TableHeader from "../../admin/components/Table/TableHeader";
import TableRows from "../../admin/components/Table/TableRows";
import TableRow from "../../admin/components/Table/TableRow";
import SelectCategory from "../../admin/pages/AddNewGoods/SelectCategory";
import SelectTrademark from "../../admin/pages/AddNewGoods/SelectTrademark";
import formatMoney from "../../core/script";
import { useEffect, useState } from "react";
import { useCallback } from "react";

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

const History = ({ listOrder, fetchListOrder, removeOrder }) => {
  const [filterSale, setFilterSale] = useState(0);

  useEffect(() => {
    fetchListOrder({ page: 1, filter: filterSale });
  }, [fetchListOrder, filterSale]);

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

  const handleRemoveOrder = useCallback(
    (value) => {
      removeOrder(value);
      fetchListOrder();
    },
    [removeOrder, fetchListOrder]
  );

  const handleSelectRole = useCallback(
    (value) => {
      setFilterSale(value);
      fetchListOrder({ page: 1, filter: value });
    },
    [fetchListOrder]
  );

  return (
    <>
      {/* <div className="col-lg-12 mb-4 mb-lg-0">
        <div className="table-responsive mb-4">
          <table className="table text-nowrap">
            <thead className="bg-light">
              <tr>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Product</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Price</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Quantity</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Total</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase" />
                </th>
              </tr>
            </thead>
            <tbody className="border-0">
              <tr>
                <th className="ps-0 py-3 border-light" scope="row">
                  <div className="d-flex align-items-center">
                    <a
                      className="reset-anchor d-block animsition-link"
                      href="detail.html"
                    >
                      <img
                        src="./Tai_nghe_Rapoo_VH710 7.1_5"
                        alt="..."
                        width={70}
                      />
                    </a>
                    <div className="ms-3">
                      <strong className="h6">
                        <span className="reset-anchor animsition-link"></span>
                      </strong>
                    </div>
                  </div>
                </th>
                <td className="p-3 align-middle border-light">
                  <p className="mb-0 small">aaaaa</p>
                </td>
                <td className="p-3 align-middle border-light">
                  <div className="border d-flex align-items-center justify-content-between px-3">
                    <span className="small text-uppercase text-gray headings-font-family">
                      Quantity
                    </span>
                    <div className="quantity">
                      <input
                        className="form-control form-control-sm border-0 shadow-0 p-0"
                        type="text"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-3 align-middle border-light">
                  <p className="mb-0 small"></p>
                </td>
                <td className="p-3 align-middle border-light">
                  <span className="reset-anchor cursor-pointer">
                    <i className="fas fa-trash-alt small text-muted" />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-light px-4 py-3">
          <div className="row align-items-center text-center">
            <div className="col-md-6 mb-3 mb-md-0 text-md-start">
              <button className="btn btn-outline-dark btn-sm">
                Update cart
              </button>
            </div>
            <div className="col-md-6 text-md-end">
              <a className="btn btn-outline-dark btn-sm" href="checkout.html">
                Order
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <TableContainer showPagination={true}>
        <TableHeader
          component={<h3 className="text-right">History</h3>}
          show={true}
          listDataOption={dataListFilter}
          handleSelect={(e) => {
            handleSelectRole(e);
          }}
        />
        <TableBody>
          <TableCol
            listCol={[
              { title: "Date Buy" },
              { title: "Status" },
              { title: "Total Amount" },
              { title: "Edit" },
            ]}
          />
          <TableRows>
            {(listOrder || []).map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{`${item.ngaymua}`}</h6>
                  </TableCell>
                  <TableCell>{statusOrder(item.trangthai)}</TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm text-info">
                      {formatMoney(item.tongtien, "VND")}
                    </h6>
                  </TableCell>
                  <TableCell>
                    {/* <button className="btn btn-sm btn-success">
                      <i className="fa fa-search"></i>
                    </button> */}
                    {item.trangthai === 0 && (
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemoveOrder(item.madonhang)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableRows>
        </TableBody>
      </TableContainer>
    </>
  );
};

export default History;
