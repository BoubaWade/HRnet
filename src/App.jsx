import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/createEmployee/CreateEmployee";
import EmployeeList from "./pages/employeesList/EmployeesList";
import Error from "./pages/error/Error";

import { Provider } from "react-redux";
import { store } from "./app/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" Component={CreateEmployee} />
          <Route path="/employee-list" Component={EmployeeList} />
          <Route path="*" Component={Error} />
        </Routes>
      </Router>
    </Provider>
  );
}
