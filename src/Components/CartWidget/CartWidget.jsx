import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <span>0</span>
      <BsFillCartFill size={40} cursor="pointer" />
    </div>
  );
};

export default CartWidget;
