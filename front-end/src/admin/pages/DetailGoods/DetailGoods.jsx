import { useEffect } from "react";
import { useParams } from "react-router-dom";
import formatMoney from "../../../core/script";
import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import InforAccountGoods from "./InforAccountGoods";

const DetailGoods = ({
  fetchListGoodsById,
  nameStaff,
  dateGoods,
  listDetailGoods,
  totalAmount,
}) => {
  const { id } = useParams();

  useEffect(() => {
    fetchListGoodsById(id);
  }, [fetchListGoodsById, id]);
  return (
    <div className="row">
      <InforAccountGoods
        nameStaff={nameStaff}
        dateGoods={dateGoods}
        totalAmount={totalAmount}
      />
      <div className="col-xl-9 order-xl-1">
        <TableContainer>
          <TableHeader />
          <TableBody>
            <TableCol
              listCol={[
                { title: "Name Product" },
                { title: "Quantity" },
                { title: "Unit Price" },
                { title: "Into Money" },
              ]}
            />
            <TableRows>
              {listDetailGoods.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      <h6 className="mb-0 text-sm ps-3">{`${item.tensanpham}`}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm ps-3">{`${item.soluong}`}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm ps-3">
                        {formatMoney(item.dongia, "VND")}
                      </h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm ps-3">
                        {formatMoney(item.thanhtien, "VND")}
                      </h6>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableRows>
          </TableBody>
        </TableContainer>
      </div>
    </div>
  );
};

export default DetailGoods;
