import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "../../Utils/Validation";
import { Edit_Employee } from "../../Redux/Reducers/employeeAction";
import Form from "../../Utils/Form";
import img from "../../Images/image.jpg";

export default function EditEmployee({ id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [skill, setSkill] = useState("");
  const [date, setDate] = useState("");

  const employees = useSelector((state) => state.employeeReducer);
  const currentEmployee = employees.find(
    (employee) => employee.id === parseInt(id)
  );

  const checkEmail = employees.find(
    (employee) => employee.id !== parseInt(id) && employee.email === email
  );

  useEffect(() => {
    if (currentEmployee) {
      setName(currentEmployee.name);
      setEmail(currentEmployee.email);
      setGender(currentEmployee.gender);
      setDesignation(currentEmployee.designation);
      setSkill(currentEmployee.skill);
      setDate(currentEmployee.date);
    }
  }, [currentEmployee]);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validation(name, email, gender, designation, skill, date, checkEmail)
    ) {
      const employeeData = {
        id: parseInt(id),
        name,
        email,
        gender,
        designation,
        skill,
        date,
      };

      dispatch(Edit_Employee(employeeData));
    }
  };

  return (
    <>
      <div className='modal fade' id='employeeEditModal'>
        <div className='modal-dialog'>
          <div className='modal-content' style={{ background: "#F1F1F1" }}>
            <div className='modal-header'>
              <h5
                className='modal-title'
                id='employeeModalLabel'
                style={{ color: "#5EC5CF" }}
              >
                Edit Employee
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
