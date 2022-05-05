import { React } from "react";

export default function Form({
  name,
  email,
  gender,
  designation,
  skill,
  date,
  setName,
  setEmail,
  setGender,
  setDesignation,
  setSkill,
  setDate,
  handleSubmit,
  checkEmail,
}) {
  return (
    <>
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
    </>
  );
}
