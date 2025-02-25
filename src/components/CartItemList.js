import { LOGO_CDN } from "../utils/constants";

const CartItemList = ({ items }) => {
  return (
    <div className="flex-col justify-center">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-gray-200 text-left flex justify-between mb-20"
        >
          <div className="w-9/12">
            <div>
              <span className="font-bold text-gray-700 text-lg">
                {item?.card?.info?.name}
              </span>
              {/* Conditional rendering for price and final price */}
              <div className="font-semibold mb-4">
                ₹
                {item?.card?.info?.finalPrice ? (
                  <>
                    <span className="line-through text-gray-400">
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </span>
                    <span className="ml-2">
                      {item.card.info.finalPrice / 100}
                    </span>
                  </>
                ) : (
                  <span>
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                )}
              </div>
              <p className="text-s font-[sans-serif] text-gray-400">
                {item.card.info.description}
              </p>

              {/* ✅ Show item quantity here */}
              <p className="text-lg font-bold text-pink-500">
                Quantity: {item.quantity}
              </p>
            </div>
          </div>

          <div className="w-3/12 relative">
            <img
              src={LOGO_CDN + item.card.info.imageId}
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
