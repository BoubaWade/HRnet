import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { headersOfDataTable } from "../../utils/constants";
import { sortListEmployees } from "../../utils/helperFunctions";
import { useDispatch } from "react-redux";
import { setEmployeesListFiltered } from "../../features/employeesListSlice";

export default function TableHeader({ listToDisplay }) {
  const [isAscending, setIsAscending] = useState(true);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    setIsAscending(!isAscending);
    const datasSortedByItem = sortListEmployees(listToDisplay, id, isAscending);
    dispatch(setEmployeesListFiltered(datasSortedByItem));
  };

  return (
    <thead>
      <tr>
        {headersOfDataTable.map(({ id, label }) => (
          <th key={id} id={id} onClick={() => handleClick(id)}>
            <span>{label}</span>
            <span>
              <FontAwesomeIcon icon={faSortUp} className="icon-sort-up" />
              <FontAwesomeIcon icon={faSortDown} className="icon-sort-down" />
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}
