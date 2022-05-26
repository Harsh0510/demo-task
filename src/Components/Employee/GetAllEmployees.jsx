import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateEmployee from "./CreateEmployee";
import { Delete_Employee } from "../../Redux/Reducers/employeeAction";
import Pagination from "../../Utils/Pagination";
import Table from "../../Utils/Table";
import "./GetAllEmployees.css";

export default function GetAllEmployees() {
  const [employeeId, setEmployeeId] = useState();
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("ASC");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  let employee = useSelector((state) => state.employeeReducer);
  let [employees, setEmployees] = useState(employee);
  let searchEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(query) ||
      employee.email.toLowerCase().includes(query) ||
      employee.gender.toLowerCase().includes(query)
  );
  let displayUsers = searchEmployees.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  );
  const pageCount = Math.ceil(searchEmployees.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const dispatch = useDispatch((state) => state);
  useEffect(() => {
    setEmployees(employee);
  }, [employee]);
  const deleteEmployee = (id) => {
    dispatch(Delete_Employee(id));
  };

  const getEmployeeId = (id) => {
    setEmployeeId(id);
  };

  const sorting = (e) => {
    const col = e.target.id;
    if (order === "ASC") {
      let sorted = [...employees].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setEmployees(sorted);
      setOrder("DSC");
      return employees;
    }
    if (order === "DSC") {
      let sorted = [...employees].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setEmployees(sorted);
      setOrder("ASC");
      return employees;
    }
  };

  useEffect(() => {
    console.log(employeeId);
  }, [employeeId]);

  const onChange = (e) => setQuery(e.target.value);

  return (
    <>
      <div className='d-flex w-50 justify-content-between mx-auto my-3 flex-wrap'>
        <div className='form-outline'>
          <input
            type='search'
            id='form1'
            className='form-control shadow-none'
            placeholder='Search here..'
            onChange={onChange}
          />
        </div>
        <CreateEmployee />
      </div>
      <table className='table table-striped w-50 mx-auto'>
        <tbody>
          <tr className='bg-info fw-bold'>
            <td className='text-white'>Id</td>
            <td className='text-white column' id='name' onClick={sorting}>
              Name
            </td>
            <td className='text-white column' id='email' onClick={sorting}>
              Email
            </td>
            <td className='text-white column' id='gender' onClick={sorting}>
              Gender
            </td>
            <td className='text-white'>Action</td>
          </tr>
          <Table
            displayUsers={displayUsers}
            getEmployeeId={getEmployeeId}
            deleteEmployee={deleteEmployee}
            employeeId={employeeId}
          />
        </tbody>
      </table>
      <Pagination pageCount={pageCount} changePage={changePage} />
    </>
  );
}
