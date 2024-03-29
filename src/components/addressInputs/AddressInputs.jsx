import "../addressInputs/addressInputs.css";
import { useEffect, useState } from "react";
import InputForm from "../reusable-ui/inputForm/InputForm";
import { useDispatch } from "react-redux";
import {
  setDataNewEmployeeField,
  setStateOfAddress,
} from "../../features/createEmployeeSlice";
import { searchStateByName } from "../../utils/helperFunctions";
import { inputsTextAddressFields } from "../../config/config";
import { listOfStatesName } from "../../utils/constants";
import { MenuSelect } from "react-menu-dropdown-list";

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
      <div>
        <span>State</span>
        <MenuSelect
          options={listOfStatesName}
          onSelect={onSelect}
          classNameContainer="menu-state"
          classNameButton="button-state"
        />
      </div>
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
