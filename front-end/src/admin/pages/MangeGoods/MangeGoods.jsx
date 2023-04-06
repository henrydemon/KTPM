import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import { useCallback, useEffect, useState } from "react";
import formatMoney from "../../../core/script";
import { Link, useNavigate } from "react-router-dom";

const MangeGoods = ({ fetchListGoods, listGoods, totalPages, currentPage }) => {
  const navigate = useNavigate();

  const [numberPage, setNumberPage] = useState(1);
  useEffect(() => {
    if (numberPage === 1) {
      fetchListGoods({ page: numberPage });
    }
  }, [fetchListGoods, numberPage]);

  const handleSelectPage = useCallback(
    (value) => {
      setNumberPage(value);
      fetchListGoods({ page: value });
    },
    [fetchListGoods]
  );
  const handleNewPageAddGoods = useCallback(() => {
    navigate("new");
  }, [navigate]);
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
          handleShowPopup={handleNewPageAddGoods}
        />
        <TableBody>
          <TableCol
            listCol={[
              { title: "Name Staff" },
              { title: "Date Goods" },
              { title: "Total Amount" },
              { title: "Detail" },
            ]}
          />
          <TableRows>
            {(listGoods || []).map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{`${item.tennhanvien}`}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{`${item.ngaynhap}`}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm text-info">
                      {formatMoney(item.tongtien, "VND")}
                    </h6>
                  </TableCell>
                  <TableCell>
                    <Link
                      to={`/admin/${item.maphieunhap}/goods`}
                      className="btn btn-sm btn-primary"
                    >
                      <i className="fa fa-search"></i>
                    </Link>
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

export default MangeGoods;
