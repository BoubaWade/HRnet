import { states } from "./constants";

export const searchStateByName = (name) => {
  return states.find((state) => state.name === name);
};

export const dataOfEachTableRow = (data) => {
  return [
    data.firstName,
    data.lastName,
    data.dateOfStart,
    data.jobDepartment,
    data.dateOfBirth,
    data.street,
    data.city,
    data.stateAbbreviation,
    data.zipCode,
  ];
};

export const getListFiltered = (datas, inputValue) => {
  return [...datas].filter((data) =>
    Object.values(data).some((value) =>
      value.toLowerCase().includes(inputValue.toLowerCase())
    )
  );
};

export const getEmployeesSortedByRestItem = (datas, itemValue, condition) => {
  if (condition) {
    return [...datas].sort((a, b) => a[itemValue]?.localeCompare(b[itemValue]));
  } else {
    return [...datas].sort((a, b) => b[itemValue]?.localeCompare(a[itemValue]));
  }
};

export const getEmployeesSortedByDate = (datas, date, condition) => {
  if (condition) {
    return [...datas].sort((a, b) => new Date(a[date]) - new Date(b[date]));
  } else {
    return [...datas].sort((a, b) => new Date(b[date]) - new Date(a[date]));
  }
};

export const getEmployeesSortedByZipCode = (datas, condition) => {
  if (condition) {
    return [...datas].sort((a, b) => parseInt(a.zipCode) - parseInt(b.zipCode));
  } else {
    return [...datas].sort((a, b) => parseInt(b.zipCode) - parseInt(a.zipCode));
  }
};

export function sortListEmployees(datas, item, condition) {
  switch (item) {
    case "dateOfBirth":
    case "dateOfStart":
      return getEmployeesSortedByDate(datas, item, condition);
    case "zipCode":
      return getEmployeesSortedByZipCode(datas, condition);
    default:
      return getEmployeesSortedByRestItem(datas, item, condition);
  }
}
