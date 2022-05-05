import React from "react";
import { ToastContainer } from "react-toastify";
import GetAllEmployees from "./Components/GetAllEmployees";

export default function App() {
  return (
    <>
      <ToastContainer />
      <GetAllEmployees />
    </>
  );
}
