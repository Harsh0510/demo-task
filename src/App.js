import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import GetAllEmployees from "./Components/GetAllEmployees";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<GetAllEmployees />} />
      </Routes>
    </>
  );
}
