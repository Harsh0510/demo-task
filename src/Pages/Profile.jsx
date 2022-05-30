import React from "react";
import "./Profile.css";
import { useUserContext } from "../Utils/CurrentUser";

export default function Profile() {
  const { firstname, lastname, email, mobilenumber } = useUserContext();
  return (
    <>
      <div className='profile'>
        <h2 className='profileHeader'>Profile</h2>
        <div className='profileContent'>
          <img
            src='https://i.pinimg.com/736x/fc/66/c3/fc66c31aeea59f4c1bcca8506b098dc1.jpg'
            alt='profileImage'
          />
          <p className='name'>
            <span>Name</span> : {firstname + " " + lastname}
          </p>
          <p>
            <span>Email</span> : {email}
          </p>
          <p>
            <span>PhoneNumber</span> : 99999999999
          </p>
        </div>
      </div>
    </>
  );
}
