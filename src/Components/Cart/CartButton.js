import classes from "./CartButton.module.css";
import { uiActions } from "../../Redux/store/ui-slice";
import { toggle_cart } from "../../Redux/Reducers/cartAction";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  // const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(toggle_cart());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      {/* <span className={classes.badge}>{cartQuantity}</span> */}
    </button>
  );
};

export default CartButton;
