import { React, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Collapse } from "react-collapse";
import { AiFillPlusCircle } from "react-icons/ai";
import EditEmployee from "../Components/Employee/EditEmployee";
import img from "../Images/image2.jpg";

export default function Table({
  displayUsers,
  getEmployeeId,
  deleteEmployee,
  employeeId,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      {displayUsers.map((employee, index) => {
        return (
          <>
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
              <td>
                <button
                  className='btn shadow-none'
                  data-bs-toggle='modal'
                  data-bs-target='#employeeEditModal'
                  onClick={() => getEmployeeId(employee.id)}
                >
                  <FaEdit className='text-primary' />
                </button>
                <EditEmployee id={employeeId} />
                <button
                  className='btn shadow-none'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                  onClick={() => getEmployeeId(employee.id)}
                >
                  <MdDelete className='text-danger ms-2' />
                </button>
                <button
                  className='btn shadow-none'
                  type='button'
                  data-toggle='collapse'
                  onClick={(event) =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  data-target='#collapseExample'
                  aria-expanded='false'
                  aria-controls='collapseExample'
                >
                  <AiFillPlusCircle className='text-primary' />
                </button>
                <Collapse isOpened={activeIndex === index}>
                  <div className='collaapse-content'>
                    <p>
                      <span className='font-weight-bold'>designation: </span>
                      {employee.designation}
                    </p>
                    <p>
                      <span className='font-weight-bold'>skill: </span>
                      {employee.skill}
                    </p>
                    <p>
                      <span className='font-weight-bold'>dob: </span>
                      {employee.date}
                    </p>
                  </div>
                </Collapse>
                <div className='modal fade' id='exampleModal'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <img
                          src={img}
                          alt='logo'
                          className='w-25 d-block ms-auto me-auto'
                        />
                        <p className='text-center text-muted'>
                          Are you sure you want to delete?
                        </p>
                      </div>
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className='btn btn-secondary'
                          data-bs-dismiss='modal'
                        >
                          Cancel
                        </button>
                        {}
                        <button
                          type='button'
                          className='btn btn-primary'
                          data-bs-dismiss='modal'
                          onClick={() => deleteEmployee(employeeId)}
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
}
