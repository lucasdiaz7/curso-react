import { BsFillCartFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import style from "./cartWidget.module.css"

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={style.carrito}>
      <span  className={style.cont}>{cart.length}</span>
      <BsFillCartFill size={40} cursor="pointer"  className={style.num} />
    </div>
  );
};

export default CartWidget;
