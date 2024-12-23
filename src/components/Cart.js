import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div>
            <button onClick={handleClearCart}>Clear Cart</button>
            <ItemList items={cartItems}/>
        </div>

    );
};

export default Cart;