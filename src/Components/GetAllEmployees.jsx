import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditEmployee from "./EditEmployee";
import CreateEmployee from "./CreateEmployee";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ReactPaginate from "react-paginate";
import "./GetAllEmployees.css";
import img from "../Images/image2.jpg";
export default function GetAllEmployees() {
  const [employeeId, setEmployeeId] = useState();
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const employees = useSelector((state) => state);
  const searchEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(query) ||
      employee.email.toLowerCase().includes(query) ||
      employee.gender.toLowerCase().includes(query)
  );
  const displayUsers = searchEmployees.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  );
  const pageCount = Math.ceil(employees.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const dispatch = useDispatch((state) => state);
  const deleteEmployee = (id) => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: id });
  };
  const getEmployeeId = (id) => {
    setEmployeeId(id);
  };
  useEffect(() => {
    console.log(employeeId);
  }, [employeeId]);

  return (
    <>
      <div className='d-flex w-50 justify-content-between mx-auto my-3 flex-wrap'>
        <div className='form-outline'>
          <input
            type='search'
            id='form1'
            className='form-control shadow-none'
            placeholder='Search here..'
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <CreateEmployee />
      </div>
      <table className='table table-striped w-50 mx-auto'>
        <tbody>
          <tr className='bg-info fw-bold'>
            <td className='text-white'>Id</td>
            <td className='text-white'>Name</td>
            <td className='text-white'>Email</td>
            <td className='text-white'>Gender</td>
            <td className='text-white'>Action</td>
          </tr>
          {displayUsers.map((employee, index) => {
            return (
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
                    <MdDelete className='text-danger ms-3' />
                  </button>
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
            );
          })}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}
