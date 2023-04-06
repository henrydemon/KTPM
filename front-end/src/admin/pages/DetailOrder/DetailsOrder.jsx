import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import InforUserOrder from "./InforUserOrder";
import formatMoney from "../../../core/script";

const DetailsOrder = ({
  fetchListOrderById,
  nameUser,
  emailUser,
  addressUser,
  toTAlAmount,
  getListDetailOrderById,
}) => {
  const { id } = useParams();

  useEffect(() => {
    fetchListOrderById(id);
  }, [fetchListOrderById, id]);

  return (
    <>
      <div className="row">
        <InforUserOrder
          nameUser={nameUser}
          emailUser={emailUser}
          addressUser={addressUser}
          toTAlAmount={toTAlAmount}
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
                {getListDetailOrderById.map((item, index) => {
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
    </>
  );
};

export default DetailsOrder;
