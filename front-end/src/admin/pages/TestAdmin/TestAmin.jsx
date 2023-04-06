import React from "react";
import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import TableRows from "../../components/Table/TableRows";

const data_dummy = [
  {
    id: 1,
    name: "Khuong Huy Hieu",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 2,
    name: "Truong Nhat Vy",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 3,
    name: "Phan The Hieu",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 4,
    name: "Thai Kim Luong",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 5,
    name: "Lam Chi Hien",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
];

const TestAdmin = () => {
  return (
    <>
      <TableContainer showPagination={true}>
        <TableHeader />
        <TableBody>
          <TableCol
            listCol={[
              { title: "hello" },
              { title: "hello" },
              { title: "hello" },
            ]}
          />
          <TableRows>
            {data_dummy.map((item) => {
              return (
                <>
                  <TableRow key={item}>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.name}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.name}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.name}</h6>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableRows>
        </TableBody>
      </TableContainer>
    </>
  );
};

export default TestAdmin;
