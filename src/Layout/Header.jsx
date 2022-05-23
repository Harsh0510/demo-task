import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
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
        <p>About</p>
        <p>Contact Us</p>
      </div>
    </>
  );
}
