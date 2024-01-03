import "../dataTable/dataTable.css";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeesSortedByRestItem,
  sortListEmployees,
} from "../../utils/helperFunctions";
import {
  setEmployeesListFiltered,
  // setEmployeesSortedByItem,
} from "../../features/employeesListSlice";
import { useEffect, useState } from "react";

export default function DataTable() {
  const { employeesList, employeesListFiltered, numberOfLineToDisplay } =
    useSelector((state) => state.employees);

  const numberOfTotalPage = Math.ceil(
    employeesListFiltered.length / numberOfLineToDisplay
  );

  const listToDisplay = employeesListFiltered.slice(0, numberOfLineToDisplay);

  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  // const [itemsPerPage] = useState(numberOfLineToDisplay); // Nombre d'éléments par page

  const indexOfLastItem = currentPage * numberOfLineToDisplay;
  const indexOfFirstItem = indexOfLastItem - numberOfLineToDisplay;
  const currentItems = employeesListFiltered.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  console.log(indexOfFirstItem, indexOfLastItem);
  const handleChangePage = (pageNumber,e ) => {
    setCurrentPage(pageNumber);
    // if(pageNumber===e.target.id){
    //   setIsActive(true)
    // }
if(currentPage===pageNumber+1){
      setIsActive(true)
}
   console.log(e.target.id)
   console.log(pageNumber)
  };
  useEffect(() => {}, []);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const dispatch = useDispatch();

  const handleSortListByItem = (datas, item, condition) => {
    const datasSortedByItem = sortListEmployees(datas, item, condition);
    dispatch(setEmployeesListFiltered(datasSortedByItem));
  };

  if (!employeesListFiltered || employeesListFiltered.length === 0) {
    return (
      <table className="no-result-of-search">
        <TableHeader />
        <tbody>
          <tr>
            <td>No data available.</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <>
      <table>
        <TableHeader
          listToDisplay={employeesListFiltered}
          handleSortListByItem={handleSortListByItem}
        />
        <tbody>
          {currentItems.map((rowData, index) => (
            <TableRow key={index} rowData={rowData} />
          ))}
        </tbody>
      </table>
      {employeesListFiltered.length > numberOfLineToDisplay && (
        <div className="pagination-container">
          {Array(numberOfTotalPage)
            .fill()
            .map((_, index) => (
              // <li key={index} className="pagination-item">
              <button
                key={index}
                id={index+1}
                className={isActive ? "actived" : ""}
                onClick={(e) => handleChangePage(index + 1,e)}
              >
                {index + 1}
              </button>
              //  </li>
            ))}
        </div>
      )}
      {/* <div>
          {currentPage} in {numberOfTotalPage} Page(s)
        </div> */}
    </>
  );
}
