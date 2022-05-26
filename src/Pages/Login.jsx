import { React } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className='loginContent'>
        <h2 className='headerContent'>Login</h2>
        <form className='formContent'>
          <div>
            <input
              type='text'
              id='email'
              name='email'
              // value={}
              // onChange={(e) => setName(e.target.value)}
              placeholder='Email*'
            />
          </div>
          <div className='mb-3'>
            <input
              type='password'
              id='password'
              name='password'
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder='Password*'
            />
          </div>
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
