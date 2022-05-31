import React from "react";
import "./Profile.css";
import { useUserContext } from "../Utils/CurrentUser";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { firstname, lastname, email, phoneNumber, photoUrl } =
    useUserContext();
  const navigate = useNavigate();
  console.log(phoneNumber);
  return (
    <>
      <div className='profile'>
        <h2 className='profileHeader'>Profile</h2>
        <div className='profileContent'>
          <img src={photoUrl} alt='profileImage' />
          <p className='name'>
            <span>Name</span> : {firstname + " " + lastname}
          </p>
          <p>
            <span>Email</span> : {email}
          </p>
          <p>
            <span>PhoneNumber</span> : {phoneNumber}
          </p>
          <button
            onClick={() => {
              navigate("/edit-profile");
            }}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}
