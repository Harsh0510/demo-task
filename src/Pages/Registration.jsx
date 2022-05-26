import { React, useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "../FirebaseAuth/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import validation from "../Utils/RegistrationValidation";

export default function Registration() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    email: "",
    mobilenumber: "",
    role: "",
  });
  const [errorMsg, setErrorMsg] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(validation(values)).length !== 0) {
      setErrorMsg(validation(values));
    } else {
      createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
        values.role,
        values.firstname
      )
        .then((res) => {
          console.log(res.user);
          updateProfile(
            res.user,
            (res.user.firstname = values.firstname),
            (res.user.lastname = values.lastname),
            (res.user.mobilenumber = values.mobilenumber),
            (res.user.role = values.role)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className='loginContent'>
        <h2 className='headerContent'>Registration</h2>
        <form className='formContent' onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              id='firstname'
              name='firstname'
              onChange={(e) =>
                setValues((prev) => ({ ...prev, firstname: e.target.value }))
              }
              placeholder='FirstName*'
            />
            <p className='error'>{errorMsg.firstname}</p>
          </div>
          <div>
            <input
              type='text'
              id='lastname'
              name='lastname'
              onChange={(e) =>
                setValues((prev) => ({ ...prev, lastname: e.target.value }))
              }
              placeholder='lastName*'
            />
            <p className='error'>{errorMsg.lastname}</p>
          </div>
          <div>
            <input
              type='text'
              id='email'
              name='email'
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder='Email*'
            />
            <p className='error'>{errorMsg.email}</p>
          </div>
          <div className='mb-3'>
            <input
              type='password'
              id='password'
              name='password'
              onChange={(e) =>
                setValues((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder='Password*'
            />
            <p className='error'>{errorMsg.password}</p>
          </div>
          <div className='mb-3'>
            <input
              type='password'
              id='confirmpassword'
              name='confirmpassword'
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  confirmpassword: e.target.value,
                }))
              }
              placeholder='ConfirmPassword*'
            />
            <p className='error'>{errorMsg.confirmpassword}</p>
          </div>
          <div className='mb-3'>
            <input
              type='text'
              id='mobilenumber'
              name='mobilenumber'
              onChange={(e) =>
                setValues((prev) => ({ ...prev, mobilenumber: e.target.value }))
              }
              placeholder='Mobile Number*'
            />
            <p className='error'>{errorMsg.mobilenumber}</p>
          </div>
          <div>
            <select
              className='mb-3'
              onChange={(e) =>
                setValues((prev) => ({ ...prev, role: e.target.value }))
              }
            >
              <option>Select Role</option>
              <option value='user'>user</option>
              <option value='admin'>admin</option>
            </select>
            <p className='error'>{errorMsg.role}</p>
          </div>
          <button type='submit'>Register</button>
          <p>
            Already Registered?{" "}
            <Link to='/login' className='text-decoration-none'>
              <span>Login</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
