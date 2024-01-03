import { useSelector } from "react-redux";

export default function Pagination({
  employeesListFiltered,
  currentPage,
  handleChangePage,
}) {
  const { numberOfLineToDisplay } = useSelector((state) => state.employees);

  const numberOfTotalPage = Math.ceil(
    employeesListFiltered.length / numberOfLineToDisplay
  );

  return (
    <div className="pagination">
      {employeesListFiltered.length > numberOfLineToDisplay && (
        <div className="pagination-left">
          {Array(numberOfTotalPage)
            .fill()
            .map((_, index) => (
              <button
                key={index + 1}
                id={index + 1}
                className={currentPage === index + 1 ? "actived" : ""}
                onClick={() => handleChangePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
        </div>
      )}
      <div className="pagination-right">
        {currentPage} in {numberOfTotalPage} Page(s)
      </div>
    </div>
  );
}
