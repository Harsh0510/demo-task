import { React, useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialValues);
  const [errorMsg, setErrorMsg] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const validation = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Please fill in the email field!";
    }
    if (!values.password) {
      errors.password = "Please fill in the password field!";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg(validation(values));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(errorMsg);
    // if (Object.keys(errorMsg).length === 0 && isSubmit) {
    //   signInWithEmailAndPassword(auth, values.email, values.password)
    //     .then(async (res) => {
    //       console.log(res.user);
    //       navigate("/");
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //       setFirebaseError(err.message);
    //     });
    // }
  }, [errorMsg]);

  return (
    <>
      <div className='loginContent'>
        <h2 className='headerContent'>Login</h2>
        <form className='formContent' onSubmit={handleSubmit}>
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
          <p className='error'>{firebaseError}</p>
          <button>Login</button>
          <p>
            Don't have an account yet?{" "}
            <Link to='/registration' className='text-decoration-none'>
              <span>Register</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
