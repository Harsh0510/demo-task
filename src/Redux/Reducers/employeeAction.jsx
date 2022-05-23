import { ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from "./employeeType";

export function Add_Employee(data) {
  return {
    type: ADD_EMPLOYEE,
    payload: data,
  };
}

export function Edit_Employee(data) {
  return {
    type: UPDATE_EMPLOYEE,
    payload: data,
  };
}

export function Delete_Employee(id) {
  return {
    type: DELETE_EMPLOYEE,
    payload: id,
  };
}
