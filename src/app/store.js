import { configureStore } from "@reduxjs/toolkit";
import employeesListSlice from "../features/employeesListSlice";
import createEmployeeSlice from "../features/createEmployeeSlice";

export const store = configureStore({
  reducer: {
    employees: employeesListSlice,
    createEmployee: createEmployeeSlice,
  },
});
