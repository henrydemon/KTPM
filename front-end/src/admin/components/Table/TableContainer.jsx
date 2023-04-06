import Pagination from "./Pagination";

const TableContainer = ({
  children,
  showPagination,
  totalPages,
  activePage,
  handleSelect,
}) => {
  console.log(
    "🚀 ~ file: TableContainer.jsx ~ line 10 ~ totalPages",
    totalPages
  );
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card ">
            {children}
            {showPagination && totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                activePage={activePage}
                handleSelect={handleSelect}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TableContainer;
