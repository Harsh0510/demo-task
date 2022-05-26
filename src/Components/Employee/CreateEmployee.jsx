import React, { useState } from "react";
import Form from "../../Utils/Form";
import img from "../../Images/image.jpg";
import { Add_Employee } from "../../Redux/Reducers/employeeAction";
import validation from "../../Utils/Validation";
import { useDispatch, useSelector } from "react-redux";

export default function CreateEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [skill, setSkill] = useState("");
  const [date, setDate] = useState("");

  const employees = useSelector((state) => state.employeeReducer);
  const checkEmail = employees.find((employee) => employee.email === email);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validation(name, email, gender, designation, skill, date, checkEmail)
    ) {
      const employeeData = {
        id: employees[employees.length - 1].id + 1,
        name,
        email,
        gender,
        designation,
        skill,
        date,
      };

      dispatch(Add_Employee(employeeData));
    }

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
          <div className='modal-content' style={{ background: "#F1F1F1" }}>
            <div className='modal-header'>
              <h5
                className='modal-title'
                id='employeeModalLabel'
                style={{ color: "#5EC5CF" }}
              >
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
