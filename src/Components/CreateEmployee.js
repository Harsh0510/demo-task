import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import img from "../Images/image.jpg";

export default function CreateEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [skill, setSkill] = useState("");
  const [date, setDate] = useState("");

  const employees = useSelector((state) => state);
  const checkEmail = employees.find((employee) => employee.email === email);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !gender || !designation || !skill || !date) {
      return toast.warning("Please fill in all fields!");
    }
    if (checkEmail) {
      return toast.error("This email is already Exists!");
    }

    const employeeData = {
      id: employees[employees.length - 1].id + 1,
      name,
      email,
      gender,
      designation,
      skill,
      date,
    };

    dispatch({ type: "ADD_EMPLOYEE", payload: employeeData });
    // toast.success("Student added successfully!!");
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-primary btn-sm shadow-none'
        data-bs-toggle='modal'
        data-bs-target='#employeeModal'
      >
        Add Employee
      </button>
      <div className='modal fade' id='employeeModal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='employeeModalLabel'>
                Add New Employee
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter Name'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Email id'
                  />
                </div>
                <div className='d-flex mb-3'>
                  <span>Gender:</span>
                  <div className='form-check ms-2'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='male'
                      id='male'
                      value='male'
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender === "male"}
                    />
                    <label className='form-check-label' htmlFor='male'>
                      male
                    </label>
                  </div>
                  <div className='form-check ms-2'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='female'
                      id='female'
                      value='female'
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender === "female"}
                    />
                    <label className='form-check-label' htmlFor='female'>
                      female
                    </label>
                  </div>
                </div>
                <select
                  className='form-select mb-3'
                  onChange={(e) => setDesignation(e.target.value)}
                >
                  <option>Select Designation</option>
                  <option value='trainee'>Trainee</option>
                  <option value='junior software developer'>
                    Junior Software Developer
                  </option>
                  <option value='software developer'>Software Developer</option>
                  <option value='senior software developer'>
                    Senior Software Developer
                  </option>
                </select>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='skill'
                    name='skill'
                    placeholder='Enter Your Skill'
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='date'
                    className='form-control'
                    id='date'
                    name='date'
                    placeholder='dd-mm-yyyy'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                {name &&
                email &&
                gender &&
                designation &&
                skill &&
                date &&
                !checkEmail ? (
                  <button
                    type='submit'
                    className='btn btn-primary '
                    data-bs-target='#employeeModal2'
                    data-bs-toggle='modal'
                    data-bs-dismiss='modal'
                  >
                    Submit
                  </button>
                ) : (
                  <button type='submit' className='btn btn-primary '>
                    Submit
                  </button>
                )}

                <button
                  type='button'
                  className='btn btn-secondary ms-2'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='modal fade' id='employeeModal2'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <img
                src={img}
                alt='logo'
                className='w-25 d-block ms-auto me-auto'
              />
              <h3 className='text-center mt-4 text-muted'>Success</h3>
              <p className='text-center text-muted'>
                Employee has been save successfully
              </p>
            </div>
            <div className='modal-footer'>
              <button
                className='btn btn-primary bg-primary'
                data-bs-target='#employeeModal2'
                data-bs-toggle='modal'
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
