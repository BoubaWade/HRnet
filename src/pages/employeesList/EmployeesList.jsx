import "../employeesList/employeesList.css";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../components/dataTable/DataTable";
import InputForm from "../../components/reusable-ui/inputForm/InputForm";
import MenuSelect from "../../components/reusable-ui/menuSelect/MenuSelect";
import { useEffect, useState } from "react";
import {
  setEmployeesListFiltered,
  setNumberOfLineToDisplay,
} from "../../features/employeesListSlice";
import { ArrayNumberOfLine } from "../../utils/constants";
import { getListFiltered } from "../../utils/helperFunctions";

export default function EmployeesList() {
  const employeesList = useSelector((state) => state.employees.employeesList);
  // const listSortedByFirstName=setAscendingSortByFirstName(employeesList)
  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    setInputSearch(e.target.value);
  };

  useEffect(() => {
    const listFiltered = getListFiltered(employeesList, inputSearch);
    dispatch(setEmployeesListFiltered(listFiltered));
  }, [inputSearch]);

  const onSelectNumberOfLine = (number) => {
    dispatch(setNumberOfLineToDisplay(number));
  };
  console.log("je suis rendu");
  return (
    <div className="empoyees-list">
      <h1>Current Employees</h1>
      <div className="filter-search-container">
        <div className="menu-select-employees-list-container">
          Show
          <MenuSelect
            options={ArrayNumberOfLine}
            onSelect={onSelectNumberOfLine}
            classNameContainer="menu-select"
            classNameButton="button-select"
          />
          entries
        </div>
        <InputForm
          id="input-search"
          label="Search"
          value={inputSearch}
          onChange={handleChange}
        />
      </div>
      <DataTable />
    </div>
  );
}
