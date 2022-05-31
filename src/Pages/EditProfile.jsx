import { React, useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { doc, updateDoc, collection } from "firebase/firestore/lite";
import { useUserContext } from "../Utils/CurrentUser";
import { db } from "../FirebaseAuth/firebase";

export default function EditProfile() {
  const navigate = useNavigate();
  const { firstname, lastname, email, phoneNumber, photoUrl, uid } =
    useUserContext();

  const initialValues = {
    email: email,
    fname: firstname,
    lastname: lastname,
    phoneNumber: phoneNumber,
    photoUrl: photoUrl,
  };
  const [values, setValues] = useState(initialValues);
  const [photourl, setPhotourl] = useState("");
  const [photo, setPhoto] = useState(null);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    try {
      const collectionRef = doc(db, "user", uid);
      updateDoc(collectionRef, {
        firstname: values.fname,
        lastname: values.lastname,
        email: values.email,
        phoneNumber: values.phoneNumber,
      });
      window.location.reload();
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className='loginContent'>
        <h2 className='headerContent'>Edit Profile</h2>
        <form className='formContent' onSubmit={handleUpdate}>
          <div>
            <input
              type='firstname'
              id='firstname'
              name='firstname'
              placeholder='firstName*'
              value={values.fname}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, fname: e.target.value }))
              }
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              id='lastname'
              name='lastname'
              placeholder='lastName*'
              value={values.lastname}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, lastname: e.target.value }))
              }
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Email*'
              value={values.email}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              id='phonenumber'
              name='phonenumber'
              placeholder='phoneNumber*'
              value={values.phoneNumber}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, phoneNumber: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlfor='image' className='ms-5 text-white'>
              Select ProfilePhoto
            </label>
            <input
              type='file'
              id='image'
              name='image'
              placeholder='ProfilePhoto*'
              onChange={handleChange}
            />
          </div>
          <button>Save Profile</button>
        </form>
      </div>
    </>
  );
}
