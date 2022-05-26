import Cart from "../Components/Cart/Cart";
import Layout from "../Components/Layout/Layout";
import Products from "../Components/Shop/Products";
import "./CartTask.css";
import { useSelector } from "react-redux";

export default function CartTask() {
  const showCart = useSelector((state) => state.cartReducer.cartVisible);

  return (
    <div className='cartTask'>
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </div>
  );
}
