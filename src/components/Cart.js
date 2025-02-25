import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";
import emptyCart from "../utils/images/emptyCart.jpg";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const isCartEmpty = cartItems.length === 0;

    // ✅ Group items by ID and add a quantity property
    const groupedItems = cartItems.reduce((acc, item) => {
        const existingItem = acc.find((i) => i.card.info.id === item.card.info.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ ...item, quantity: 1 });
        }
        return acc;
    }, []);

    return (
        <div>
            {isCartEmpty ? (
                <div className="">
                    <h1 className="font-extrabold text-4xl mt-10 mr-3 text-pink-600 ml-[540px]">
                        Your Cart is Empty!
                    </h1>
                    <img src={emptyCart} className="w-[600px] mx-[420px]" />
                </div>
            ) : (
                <div className="flex justify-center flex-col mx-80">
                    <button
                        className="w-60 text-pink-400 bg-white p-4 m-10 mx-72 rounded-2xl font-bold shadow-sm shadow-pink-800"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                    <CartItemList items={groupedItems} />
                </div>
            )}
        </div>
    );
};

export default Cart;
