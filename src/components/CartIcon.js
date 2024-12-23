import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-black hover:text-pink-400 text-2xl"
      />
      {cartItem.length > 0 && (
        <span className="absolute -top-2 -right-2 text-xs bg-pink-500 text-white rounded-full px-2 py-1">
          {cartItem.length}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
