import React, { useState } from "react";
import Form from "../Utils/Form";
import img from "../Images/image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

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

    if (!name) {
      return toast.warning("Please fill in name field!");
    }
    if (!email) {
      return toast.warning("Please fill in email field!");
    }
    if (!gender) {
      return toast.warning("Please fill in gender field!");
    }
    if (!designation) {
      return toast.warning("Please fill in designation field!");
    }
    if (!skill) {
      return toast.warning("Please fill in skill field!");
    }
    if (!date) {
      return toast.warning("Please fill in date field!");
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
    setName("");
    setEmail("");
    setDesignation("");
    setGender("");
    setSkill("");
    setDate("");
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
              <Form
                name={name}
                email={email}
                gender={gender}
                designation={designation}
                skill={skill}
                date={date}
                setName={setName}
                setEmail={setEmail}
                setGender={setGender}
                setDesignation={setDesignation}
                setSkill={setSkill}
                setDate={setDate}
                handleSubmit={handleSubmit}
                checkEmail={checkEmail}
              />
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
