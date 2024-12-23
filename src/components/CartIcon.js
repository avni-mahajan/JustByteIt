import { useSelector } from "react-redux";
import cart from "../utils/images/cart.jpg";

const CartIcon = () => {
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div className="relative ">
      <div className="w-10">
        <img src={cart} />
      </div>
     { cartItem.length>0 && <span className="absolute -top-2 -right-2 text-xs">{cartItem.length}</span> }
    </div>
  );
};

export default CartIcon;
