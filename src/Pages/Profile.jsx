import React from "react";
import "./Profile.css";

export default function Profile() {
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
            <span>Name</span> : Harsh Patel
          </p>
          <p>
            <span>Email</span> : harsh112@gmail.com
          </p>
          <p>
            <span>PhoneNumber</span> : 9999999999
          </p>
        </div>
      </div>
    </>
  );
}
