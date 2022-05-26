import React from "react";
import Home from "../Pages/Home";
import Header from "../Layout/Header";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import DemoTask from "../Pages/DemoTask";
import CartTask from "../Pages/CartTask";
import { Routes, Route } from "react-router";

export default function RoutesComponent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/demo-task' element={<DemoTask />} />
        <Route path='/cart-task' element={<CartTask />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </>
  );
}
