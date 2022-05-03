import React from "react";

export default function CreateEmployee() {
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
              <form>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Enter Name'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
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
                    />
                    <label className='form-check-label' htmlFor='female'>
                      female
                    </label>
                  </div>
                </div>
                <select className='form-select mb-3'>
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
                    placeholder='Enter Your Skill'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='date'
                    className='form-control'
                    id='date'
                    placeholder='dd-mm-yyyy'
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary'>
                Submit
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
