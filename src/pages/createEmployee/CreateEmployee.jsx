import "../createEmployee/createEmployee.css";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateEmployeeForm from "./CreateEmployeeForm";

export default function CreateEmployee() {
  const navigateToEmployeesList = (
    <Link className="navigate-to-list-employee" to="/employee-list">
      View Current Employees
    </Link>
  );

  return (
    <div className="page-content">
      <h1>HRnet</h1>
      <div className="main-container">
        {navigateToEmployeesList}
        <h2>Create Employee</h2>
        <CreateEmployeeForm />
      </div>
      <Modal />
    </div>
  );
}
