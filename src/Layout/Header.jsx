import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../Utils/CurrentUser";

export default function Header() {
  const { firstname, lastname, role, logout } = useUserContext();
  const handleLogOut = () => {
    logout();
  };

  return (
    <>
      <div className='header'>
        <Link to='/' className='text-decoration-none text-white'>
          <p>Home</p>
        </Link>
        {role === "admin" && (
          <Link to='/demo-task' className='text-decoration-none text-white'>
            <p>Demo-Task</p>
          </Link>
        )}
        <Link to='/cart-task' className='text-decoration-none text-white'>
          <p>Cart-Task</p>
        </Link>
        {firstname && (
          <Link to='/profile' className='text-decoration-none text-white'>
            <p>Profile</p>
          </Link>
        )}
        <div class='dropdown'>
          {firstname ? (
            <button
              class='btn dropdown-toggle shadow-none'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
            >
              {firstname + " " + lastname}
            </button>
          ) : (
            <button
              class='btn dropdown-toggle shadow-none'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
            >
              Account
            </button>
          )}

          <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            {!firstname ? (
              <li>
                <Link to='/login' className='text-decoration-none text-white'>
                  <p>Login</p>
                </Link>
              </li>
            ) : (
              <li>
                <p onClick={handleLogOut}>Logout</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
