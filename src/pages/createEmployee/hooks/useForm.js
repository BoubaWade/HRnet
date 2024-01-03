import { useDispatch, useSelector } from "react-redux";
import { setEmployeesList } from "../../../features/employeesListSlice";
import { setShowModal } from "../../../features/createEmployeeSlice";
import { useRef } from "react";

export default function useForm() {
  const { dateOfBirth, dateOfStart, state, jobDepartment } = useSelector(
    (state) => state.createEmployee
  );
  const { stateAbbreviation } = state;
  const { firstName, lastName, street, city, zipCode } = useSelector(
    (state) => state.createEmployee.restOfDataNewEmployee
  );
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
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleCreateEmployee = (employeeToAdd) => {
    dispatch(setEmployeesList(employeeToAdd));
    formRef.current.reset();
    dispatch(setShowModal(true));
  };

  return { formRef, dataEmployeeToAdd, handleCreateEmployee };
}
