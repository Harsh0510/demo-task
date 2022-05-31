import React from "react";
import Home from "../Pages/Home";
import Header from "../Layout/Header";
import Profile from "../Pages/Profile";
import { useUserContext } from "../Utils/CurrentUser";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import DemoTask from "../Pages/DemoTask";
import CartTask from "../Pages/CartTask";
import { Routes, Route } from "react-router";
import EditProfile from "../Pages/EditProfile";

export default function RoutesComponent() {
  const { firstname, role } = useUserContext();
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {role === "admin" && <Route path='/demo-task' element={<DemoTask />} />}
        {firstname && <Route path='/profile' element={<Profile />} />}
        <Route path='/cart-task' element={<CartTask />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </>
  );
}
