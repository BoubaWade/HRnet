import { createSlice } from "@reduxjs/toolkit";

const restOfInitialData = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  zipCode: "",
};

const createEmployeeSlice = createSlice({
  name: "createEmployee",
  initialState: {
    dateOfBirth: "",
    dateOfStart: "",
    state: {},
    jobDepartment: "",
    restOfDataNewEmployee: restOfInitialData,
    showModal: false,
  },
  reducers: {
    setDataNewEmployeeField: (state, { payload }) => {
      state.restOfDataNewEmployee = {
        ...state.restOfDataNewEmployee,
        ...payload,
      };
    },
    setDateOfBirth: (state, { payload }) => {
      state.dateOfBirth = payload;
    },
    setDateOfStart: (state, { payload }) => {
      state.dateOfStart = payload;
    },
    setStateOfAddress: (state, { payload }) => {
      state.state = payload;
    },
    setJobDepartment: (state, { payload }) => {
      state.jobDepartment = payload;
    },
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});

export const {
  setDataNewEmployeeField,
  setDateOfBirth,
  setDateOfStart,
  setStateOfAddress,
  setJobDepartment,
  setShowModal,
} = createEmployeeSlice.actions;
export default createEmployeeSlice.reducer;
