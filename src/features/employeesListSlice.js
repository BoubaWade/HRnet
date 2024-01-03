import { createSlice } from "@reduxjs/toolkit";
import { fakeDatas } from "../utils/fakeDatas";
import { ArrayNumberOfLine } from "../utils/constants";

const employeesListSlice = createSlice({
  name: "employees",
  initialState: {
    employeesList: fakeDatas,
    employeesListFiltered: [],
    numberOfLineToDisplay: ArrayNumberOfLine[0],
  },
  reducers: {
    setEmployeesList: (state, { payload }) => {
      state.employeesList.unshift(payload);
    },
    setEmployeesListFiltered: (state, { payload }) => {
      state.employeesListFiltered = payload;
    },
    setEmployeesListToDisplay: (state, { payload }) => {
      state.employeesListToDisplay = payload;
    },
    setNumberOfLineToDisplay: (state, { payload }) => {
      state.numberOfLineToDisplay = payload;
    },
  },
});

export const {
  setEmployeesList,
  setEmployeesListFiltered,
  setNumberOfLineToDisplay,
} = employeesListSlice.actions;
export default employeesListSlice.reducer;
