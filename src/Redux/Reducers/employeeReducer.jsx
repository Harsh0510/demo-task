import { ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from "./employeeType";
let initialState = [
  {
    id: 1,
    name: "manav",
    email: "manav112@gmail.com",
    gender: "male",
    designation: "Junior Software Developer",
    skill: "cricket",
    dob: "29/11/1999",
  },
  {
    id: 2,
    name: "rahul ",
    email: "rahul112@gmail.com",
    gender: "male",
    designation: "Junior Software Developer",
    skill: "cricket",
    dob: "29/11/1999",
  },
];

initialState = JSON.parse(localStorage.getItem("employees") || "[]");

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      const upState = [...state, action.payload];
      localStorage.setItem("employees", JSON.stringify(upState));
      return upState;
    case UPDATE_EMPLOYEE:
      const updatedState = state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );
      localStorage.setItem("employees", JSON.stringify(updatedState));
      return updatedState;
    case DELETE_EMPLOYEE:
      const uState = state.filter((employee) => employee.id !== action.payload);
      localStorage.setItem("employees", JSON.stringify(uState));
      return uState;
    default:
      return state;
  }
};

export default employeeReducer;
