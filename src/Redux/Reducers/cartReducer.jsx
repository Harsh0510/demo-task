import { TOGGLE_CART, ADD_TO_CART, REMOVE_CART } from "./cartType";
let initialState = { cartVisible: false, items: [], totalQuantity: 0 };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return !state.cartVisible;
    // case ADD_TO_CART:
    //   const updatedState = state.map((employee) =>
    //     employee.id === action.payload.id ? action.payload : employee
    //   );
    //   localStorage.setItem("employees", JSON.stringify(updatedState));
    //   return updatedState;
    // case REMOVE_CART:
    //   const uState = state.filter((employee) => employee.id !== action.payload);
    //   localStorage.setItem("employees", JSON.stringify(uState));
    //   return uState;
    default:
      return state;
  }
};

export default cartReducer;
