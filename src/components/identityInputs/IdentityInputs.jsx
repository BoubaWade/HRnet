import { useEffect, useState } from "react";
import InputWithCalendar from "../reusable-ui/inputWithCalendar/InputWithCalendar";
import {
  setDataNewEmployeeField,
  setDateOfBirth,
  setDateOfStart,
} from "../../features/createEmployeeSlice";
import { useDispatch } from "react-redux";
import InputForm from "../reusable-ui/inputForm/InputForm";
import { inputsTextIdentityFields } from "../../config/config";

export default function IdentityInputs() {
  const [identityData, setIdentityData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdentityData({
      ...identityData,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(setDataNewEmployeeField(identityData));
  }, [identityData]);

  return (
    <div className="identity-inputs">
      {inputsTextIdentityFields.map((field, index) => (
        <InputForm
          key={index}
          id={field.id}
          name={field.name}
          label={field.label}
          type="text"
          value={identityData.value}
          onChange={(e) => handleChange(e)}
        />
      ))}
      <InputWithCalendar
        label="Date of Birth"
        name="dateOfBirth"
        reduxAction={setDateOfBirth}
      />
      <InputWithCalendar
        label="Start Date"
        name="startDate"
        reduxAction={setDateOfStart}
      />
    </div>
  );
}
