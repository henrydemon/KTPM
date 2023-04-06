import TableBody from "../../components/Table/TableBody";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import TableCell from "../../components/Table/TableCell";
import formatMoney from "../../../core/script";
import { useCallback, useEffect, useState } from "react";
import SelectCategory from "./SelectCategory";
import SelectTrademark from "./SelectTrademark";
import { useMemo } from "react";

const AddNewGoods = ({
  listProduct,
  fetchListProductBySearch,
  totalPages,
  currentPage,
  listCategory,
  listTrademark,
  addNewGoodsToOrder,
  listGoods,
  createGoods,
}) => {
  const [numberPage, setNumberPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState(0);
  const [filterTrademark, setFilterTrademark] = useState(0);

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

  const handleSaveItemGoods = useCallback(
    (item) => {
      addNewGoodsToOrder({
        id: item.masanpham,
        nameProduct: item.tensanpham,
        quantity: 1,
        price: item.gia,
        unitPrice: item.gia,
      });
    },
    [addNewGoodsToOrder]
  );

  const objectOrderGoods = useMemo(() => {
    const totalAmountArray = (listGoods || []).map(
      (item) => item.quantity * item.price
    );
    const totalAmount = (totalAmountArray || []).reduce(
      (acc, curr) => acc + curr,
      0
    );

    const arrayLisGoods = (listGoods || []).map((item) => {
      return {
        masanpham: item.id,
        soluong: item.quantity,
        dongia: item.price,
        thanhtien: item.quantity * item.price,
      };
    });
    return {
      tongtien: totalAmount,
      chitietphieunhap: arrayLisGoods,
    };
  }, [listGoods]);

  const handleCreateGoods = useCallback(() => {
    console.log(objectOrderGoods);
    createGoods(objectOrderGoods);
  }, [createGoods, objectOrderGoods]);

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
              { title: "Add to goods" },
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
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleSaveItemGoods(item)}
                    >
                      <i className="ni ni-fat-add"></i>
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableRows>
        </TableBody>
      </TableContainer>

      <TableContainer>
        <TableHeader
          component={
            <>
              <h3 className="text-right">Cart Goods</h3>
              <button
                className="btn btn-sm btn-success"
                style={{ width: "80px" }}
                onClick={() => handleCreateGoods()}
              >
                <span className="">Order</span>
              </button>
            </>
          }
        />
        <TableBody>
          <TableCol
            listCol={[
              { title: "Name Product" },
              { title: "Quantity" },
              { title: "Price" },
              { title: "Unit Price" },
            ]}
          />
          <TableRows>
            {(listGoods || []).map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.nameProduct}</h6>
                  </TableCell>
                  <TableCell>
                    <input
                      disabled
                      defaultValue={item.quantity}
                      style={{ width: "70px", marginRight: "8px" }}
                    />
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm text-info">
                      {formatMoney(item.price, "VND")}
                    </h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm text-warning">
                      {formatMoney(item.price * item.quantity, "VND")}
                    </h6>
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

export default AddNewGoods;
