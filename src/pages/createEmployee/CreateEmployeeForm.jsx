import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setJobDepartment } from "../../features/createEmployeeSlice";
import IdentityInputs from "../../components/identityInputs/IdentityInputs";
// import MenuSelect from "../../components/reusable-ui/menuSelect/MenuSelect";
import AddressInputs from "../../components/addressInputs/AddressInputs.jsx";
import { departmentList } from "../../utils/constants.js";
import useForm from "./hooks/useForm.js";
import { MenuSelect } from "react-menu-dropdown-list";

export default function CreateEmployeeForm() {
  const { formRef, dataEmployeeToAdd, handleCreateEmployee } = useForm();
  const [selectedDepatment, setSelectedDepatment] = useState("");
  const dispatch = useDispatch();

  const onSelectDepartment = (option) => {
    setSelectedDepatment(option);
  };

  useEffect(() => {
    dispatch(setJobDepartment(selectedDepatment));
  }, [selectedDepatment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateEmployee(dataEmployeeToAdd);
  };

  return (
    <form id="create-employee" onSubmit={(e) => handleSubmit(e)} ref={formRef}>
      <IdentityInputs />
      <AddressInputs />
      <div>
        <span>Department</span>
        <MenuSelect
          options={departmentList}
          onSelect={onSelectDepartment}
          classNameContainer="menu-department"
          classNameButton="button-menu"
        />
      </div>
      <button type="submit" className="submit-button">
        Save
      </button>
    </form>
  );
}
