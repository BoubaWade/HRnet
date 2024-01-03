import "../addressInputs/addressInputs.css";
import { useEffect, useState } from "react";
import InputForm from "../reusable-ui/inputForm/InputForm";
import { useDispatch } from "react-redux";
import {
  setDataNewEmployeeField,
  setStateOfAddress,
} from "../../features/createEmployeeSlice";
import MenuSelect from "../reusable-ui/menuSelect/MenuSelect";
import { searchStateByName } from "../../utils/helperFunctions";
import { inputsTextAddressFields } from "../../config/config";
import { listOfStatesName } from "../../utils/constants";

export default function AddressForm() {
  const [addressData, setAddressData] = useState({});
  const [selectedStateName, setSelectedStateName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

  const onSelect = (option) => {
    setSelectedStateName(option);
  };

  useEffect(() => {
    dispatch(setDataNewEmployeeField(addressData));

    const stateAbbreviation =
      searchStateByName(selectedStateName)?.abbreviation;

    dispatch(
      setStateOfAddress({
        selectedStateName,
        stateAbbreviation,
      })
    );
  }, [addressData, selectedStateName]);

  return (
    <div className="address address-inputs">
      {/* <legend>Address</legend> */}
      {inputsTextAddressFields.map((field, index) => (
        <InputForm
          key={index}
          id={field.id}
          name={field.name}
          label={field.label}
          type="text"
          value={addressData.value}
          onChange={(e) => handleChange(e)}
        />
      ))}
      <MenuSelect
        options={listOfStatesName}
        onSelect={onSelect}
        label="State"
        classNameContainer="menu-state"
      />
      <InputForm
        id="zip-code"
        name="zipCode"
        label="Zip Code"
        type="number"
        value={addressData.value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
