import classes from "./CartButton.module.css";
import { toggle_cart } from "../../Redux/Reducers/CartAction";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cartReducer.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(toggle_cart());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
