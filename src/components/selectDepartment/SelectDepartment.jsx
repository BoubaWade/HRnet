import React, { useEffect, useState } from "react";
import { setJobDepartment } from "../../features/employeesListSlice";

export default function SelectDepartment() {
  const [departmentSelected, setDepartmentSelected] = useState(null);

  const handleChange = (e) => {
    setJobDepartment(e.target.value);
  };

  // useEffect(() => {
  //   updateDataEmployee(departmentSelected, "departmentSelected");
  // }, [departmentSelected]);

  return (
    <>
      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
        onChange={(e) => handleChange(e)}
      >
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
    </>
  );
}
