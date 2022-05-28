import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className='header'>
        <Link to='/' className='text-decoration-none text-white'>
          <p>Home</p>
        </Link>
        <Link to='/demo-task' className='text-decoration-none text-white'>
          <p>Demo-Task</p>
        </Link>
        <Link to='/cart-task' className='text-decoration-none text-white'>
          <p>Cart-Task</p>
        </Link>
        <div class='dropdown'>
          <button
            class='btn dropdown-toggle shadow-none'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
          >
            Dropdown button
          </button>
          <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            <li>
              <Link to='/login' className='text-decoration-none text-white'>
                <p>Login</p>
              </Link>
            </li>
            <li>
              <button>
                <p>Logout</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
