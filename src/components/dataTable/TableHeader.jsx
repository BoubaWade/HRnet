import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  getEmployeesSortedByDate,
  getEmployeesSortedByRestItem,
  getEmployeesSortedByZipCode,
} from "../../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { headersOfDataTable } from "../../utils/constants";

export default function TableHeader({ listToDisplay, handleSortListByItem }) {
  const { employeesList, employeesListFiltered, numberOfLineToDisplay } =
  useSelector((state) => state.employees);
  const [showIconsUp, setShowIconsUp] = useState(true);
  const [showIconsDown, setShowIconsDown] = useState(true);
  // const [sortedList, setSortedList] = useState(listToDisplay);
  const [isAscending, setIsAscending] = useState(true);

  const handleClick = (id) => {
    // const toggleSort = () => {
    // let sorted = [...sortedList];
    // sorted = isAscending
    //   ? sorted.sort((a, b) => a - b)
    //   : sorted.sort((a, b) => b - a);
    // setIsAscending(!isAscending);
    // setSortedList(sorted);
    // };

    // if (showIconsSort.iconUp) {
    //   setShowIconsSort((prevState) => ({
    //     ...prevState,
    //     iconUp: false,
    //     iconDown: true,
    //   }));
    // }
    // if (showIconsSort.iconDown) {
    //   setShowIconsSort((prevState) => ({
    //     ...prevState,
    //     iconUp: true,
    //     iconDown: false,
    //   }));
    // }
    console.log(id);
    // const itemValue = e.target.parentElement.id;
    // const itemValue = e.target.id || e.target.parentElement.id;
    // const findIconClicked=
    setIsAscending(!isAscending);

    setShowIconsUp(!showIconsUp);

    setShowIconsDown(!showIconsDown);

    handleSortListByItem(listToDisplay, id, isAscending);
    // if (showIconsUp) {
    //   setShowIconsDown(false);
    // }
    // if (showIconsDown) {
    //   setShowIconsUp(false);
    // }
  };
  // const handleSortUpClick = () => {
  //   console.log("Tri ascendant déclenché");
  // };

  // const handleSortDownClick = () => {
  //   console.log("Tri descendant déclenché");
  // };

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
        {/* {firstRowDatasTable.map((data, index) => (
          <th key={index} className="item-container">
            <span>{data}</span>
            <span className="icons-sort" onClick={handleClick}>
              <FontAwesomeIcon
                icon={faSortUp}
                className={
                  !showIconUp ? "icon-sort-up icon-up" : "icon-sort-up"
                }
              />
              <FontAwesomeIcon
                icon={faSortDown}
                className={
                  !showIconDown
                    ? "icon-sort-down icon-down"
                    : "icon-sort-down"
                }
              />
            </span>
          </th>
        ))} */}
        {/* <th id="firstName" onClick={handleClick}>
          <div> First Name</div>
          <div>
            <FontAwesomeIcon icon={faSortUp} className="icon-sort-up" />
            <FontAwesomeIcon icon={faSortDown} className="icon-sort-down" />
          </div>
        </th>
        <th id="lastName" onClick={handleClick}>
          <div>Last Name</div>
          <div>
            <FontAwesomeIcon icon={faSortUp} className="icon-sort-up" />
            <FontAwesomeIcon icon={faSortDown} className="icon-sort-down" />
          </div>
        </th>
        <th id="dateOfStart" onClick={handleClick}>
          <div>Start Date</div>
          <div>
            <FontAwesomeIcon icon={faSortUp} className="icon-sort-up" />
            <FontAwesomeIcon icon={faSortDown} className="icon-sort-down" />
          </div>
        </th>
        <th id="jobDepartment" onClick={handleClick}>
          <div>Department</div>
          <div>
            <FontAwesomeIcon icon={faSortUp} className="icon-sort-up" />
            <FontAwesomeIcon icon={faSortDown} className="icon-sort-down" />
          </div>
        </th>
        <th id="dateOfBirth" onClick={handleClick}>
          <div>Date of Birth</div>
          <div>
            <FontAwesomeIcon icon={faSortUp} className="icon-sort-up" />
            <FontAwesomeIcon icon={faSortDown} className="icon-sort-down" />
          </div>
        </th>
        <th id="street" onClick={handleClick}>
          <div>Street</div>
          <div>
            <FontAwesomeIcon icon={faSortUp} className="icon-sort-up" />
            <FontAwesomeIcon icon={faSortDown} className="icon-sort-down" />
          </div>
        </th>
        <th id="city" onClick={handleClick}>
          <div>City</div>
          <div>
            <FontAwesomeIcon icon={faSortUp} className="icon-sort-up" />
            <FontAwesomeIcon icon={faSortDown} className="icon-sort-down" />
          </div>
        </th>
        <th id="stateAbbreviation" onClick={handleClick}>
          <div>State</div>
          <div>
            <FontAwesomeIcon icon={faSortUp} className="icon-sort-up" />
            <FontAwesomeIcon icon={faSortDown} className="icon-sort-down" />
          </div>
        </th>
        <th id="zipCode" onClick={handleClick}>
          <div>Zip Code</div>
          <div>
            <FontAwesomeIcon icon={faSortUp} className="icon-sort-up" />
            <FontAwesomeIcon icon={faSortDown} className="icon-sort-down" />
          </div>
        </th> */}
      </tr>
    </thead>
  );
}
