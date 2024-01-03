import "../dataTable/dataTable.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import EmptyDataTable from "./EmptyDataTable";
import Pagination from "./Pagination";
import Table from "./Table";

export default function DataTable() {
  const { employeesListFiltered, numberOfLineToDisplay } = useSelector(
    (state) => state.employees
  );
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * numberOfLineToDisplay;
  const indexOfFirstItem = indexOfLastItem - numberOfLineToDisplay;
  const currentListEmployees = employeesListFiltered.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!employeesListFiltered || employeesListFiltered.length === 0) {
    return <EmptyDataTable />;
  }

  return (
    <>
      <Table
        employeesListFiltered={employeesListFiltered}
        currentListEmployees={currentListEmployees}
      />
      <Pagination
        employeesListFiltered={employeesListFiltered}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
    </>
  );
}
