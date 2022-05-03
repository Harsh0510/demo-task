import React from "react";
import CreateEmployee from "./CreateEmployee";
export default function GetAllEmployees() {
  return (
    <>
      <div className='d-flex w-50 justify-content-between mx-auto my-3 flex-wrap'>
        <div className='form-outline'>
          <input
            type='search'
            id='form1'
            className='form-control shadow-none'
            placeholder='Search here..'
          />
        </div>
        <CreateEmployee />
      </div>
      <table className='table table-striped w-50 mx-auto'>
        <tbody>
          <tr className='bg-info fw-bold'>
            <td className='text-white'>Name</td>
            <td className='text-white'>Email</td>
            <td className='text-white'>Gender</td>
            <td className='text-white'>Action</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Action</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Action</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Action</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
