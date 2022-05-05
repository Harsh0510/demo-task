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
    case "ADD_EMPLOYEE":
      state = [...state, action.payload];
      localStorage.setItem("employees", JSON.stringify(state));
      return state;
    case "UPDATE_EMPLOYEE":
      const updateState = state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );
      console.log(action.payload.id);
      console.log(action);
      state = updateState;
      localStorage.setItem("employees", JSON.stringify(state));
      return state;
    case "DELETE_EMPLOYEE":
      const filterEmployee = state.filter(
        (employee) => employee.id !== action.payload
      );
      state = filterEmployee;
      localStorage.setItem("employees", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};

export default employeeReducer;
