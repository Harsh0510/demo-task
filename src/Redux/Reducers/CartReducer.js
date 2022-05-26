import { TOGGLE_CART, ADD_TO_CART, REMOVE_CART } from "./CartType";
let initialState = { cartVisible: false, items: [], totalQuantity: 0 };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, cartVisible: !state.cartVisible };
    case ADD_TO_CART:
      let newItem = action.payload;
      let existingCartItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingCartItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingCartItem.quantity++;
        existingCartItem.totalPrice =
          existingCartItem.totalPrice + newItem.price;
      }
      return { ...state, items: [...state.items] };
    case REMOVE_CART:
      let id = action.payload;
      let existingcartItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingcartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingcartItem.quantity--;
        existingcartItem.totalPrice =
          existingcartItem.totalPrice - existingcartItem.price;
      }
      return { ...state, items: [...state.items] };
    default:
      return state;
  }
};

export default cartReducer;
