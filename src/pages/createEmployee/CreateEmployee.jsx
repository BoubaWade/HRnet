import "../createEmployee/createEmployee.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AddressInputs from "../../components/addressInputs/AddressInputs";
import IdentityInputs from "../../components/identityInputs/IdentityInputs";
import { useDispatch, useSelector } from "react-redux";
import {
  setJobDepartment,
  setShowModal,
} from "../../features/createEmployeeSlice";
import { setEmployeesList } from "../../features/employeesListSlice";
import Modal from "../../components/modal/Modal";
import MenuSelect from "../../components/reusable-ui/menuSelect/MenuSelect";
import { departmentList } from "../../utils/constants";
import InputForm from "../../components/reusable-ui/inputForm/InputForm";

export default function CreateEmployee() {
  const { dateOfBirth, dateOfStart, state, jobDepartment } = useSelector(
    (state) => state.createEmployee
  );
  const { stateAbbreviation } = state;
  const { firstName, lastName, street, city, zipCode } = useSelector(
    (state) => state.createEmployee.restOfDataNewEmployee
  );
  const [selectedDepatment, setSelectedDepatment] = useState("");
  const dataEmployeeToAdd = {
    firstName,
    lastName,
    dateOfStart,
    jobDepartment,
    dateOfBirth,
    street,
    city,
    stateAbbreviation,
    zipCode,
  };
  const dispatch = useDispatch();
  const formRef = useRef();

  const onSelectDepartment = (option) => {
    setSelectedDepatment(option);
  };

  useEffect(() => {
    dispatch(setJobDepartment(selectedDepatment));
  }, [selectedDepatment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmployeesList(dataEmployeeToAdd));
    formRef.current.reset();
    dispatch(setShowModal(true));
  };

  return (
    <div className="page-content">
      <h1>HRnet</h1>
      <div className="main-container">
        <Link className="navigate-to-list-employee" to="/employee-list">
          View Current Employees
        </Link>
        <h2>Create Employee</h2>
        <form
          id="create-employee"
          onSubmit={(e) => handleSubmit(e)}
          ref={formRef}
        >
          <IdentityInputs />
          <AddressInputs />
          <MenuSelect options={departmentList} onSelect={onSelectDepartment} label="Department" classNameContainer ="menu-department"/>
          <button type="submit" className="submit-button">Save</button>
        </form>
      </div>
      <Modal />
    </div>
  );
}
