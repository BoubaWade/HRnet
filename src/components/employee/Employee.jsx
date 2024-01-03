import React from "react";

export default function Employee({ dataEmployee }) {
  const {
    firstName,
    lastName,
    dateOfStart,
    jobDepartment,
    dateOfBirth,
    street,
    city,
    stateOfAddressEmployee,
    zipCode,
  } = dataEmployee;

  const dataEmployeeFormattedToArray = Object.values({ ...dataEmployee });

  return (
    <tr>
      {/* {dataEmployeeFormattedToArray.map((data, index) => (
        <td key={index}>{data}</td>
      ))} */}
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{dateOfStart}</td>
      <td>{jobDepartment}</td>
      <td>{dateOfBirth}</td>
      <td>{street}</td>
      <td>{city}</td>
      <td>{stateOfAddressEmployee}</td>
      <td>{zipCode}</td>
    </tr>
  );
}
