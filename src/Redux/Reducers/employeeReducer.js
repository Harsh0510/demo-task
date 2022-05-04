const initialState = [
  {
    name: "manav",
    email: "manav112@gmail.com",
    gender: "male",
    designation: "Junior Software Developer",
    skill: "cricket",
    dob: "29/11/1999",
  },
  {
    name: "rahul ",
    email: "rahul112@gmail.com",
    gender: "male",
    designation: "Junior Software Developer",
    skill: "cricket",
    dob: "29/11/1999",
  },
];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default employeeReducer;
