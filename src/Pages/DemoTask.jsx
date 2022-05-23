import React from "react";
import { ToastContainer } from "react-toastify";
import GetAllEmployees from "../Components/Employee/GetAllEmployees";

export default function DemoTask() {
  return (
    <>
      <ToastContainer />
      <GetAllEmployees />
    </>
  );
}
