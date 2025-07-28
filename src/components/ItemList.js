import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { LOGO_CDN } from "../utils/constants";
import starRating from "../utils/images/star-rating.png";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getItemCount = (itemId) => {
    return cartItems.filter((cartItem) => cartItem.card.info.id === itemId)
      .length;
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const itemCount = getItemCount(item.card.info.id);
        const isVeg = item.card.info.isVeg;
        const rating = item.card.info.ratings?.aggregatedRating?.rating;
        const ratingCount =
          item.card.info.ratings?.aggregatedRating?.ratingCountV2;

        //State to handle "Show More"
        const [showMore, setShowMore] = useState(false);
        const description = item.card.info.description || "";

        return (
          <div key={item.card.info.id} className="border-gray-200 text-left">
            <div className="flex justify-between pb-1">
              <div className="w-9/12">
                <div className="flex items-center">
                  {/* Veg/Non-Veg Indicator */}
                  <div
                    className={`w-5 h-5 flex items-center justify-center border rounded-sm mr-2 ${
                      isVeg ? "border-green-600" : "border-red-600"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isVeg ? "bg-green-600" : "bg-red-600"
                      }`}
                    ></div>
                  </div>

                  {/* Item Name */}
                  <span className="font-bold text-gray-700 text-lg">
                    {item?.card?.info?.name}
                  </span>
                </div>

                {/* Rating Section */}
                {rating && (
                  <div className="flex items-center mt-2 text-sm">
                    <img src={starRating} className="w-4 h-4 mr-1" alt="⭐" />
                    <span className="text-pink-600 font-bold">{rating}</span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({ratingCount} ratings)
                    </span>
                  </div>
                )}

                {/* Price Section */}
                <div className="font-semibold mb-2">
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

                {/* Description with "Show More" */}
                {description && (
                  <p className="text-gray-500 text-sm leading-5">
                    {showMore
                      ? description
                      : `${description.slice(0, 150)}... `}
                    {description.length > 150 && (
                      <button
                        className="text-gray-700 font-semibold"
                        onClick={() => setShowMore(!showMore)}
                      >
                        {showMore ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </p>
                )}
              </div>

              {/* Image & Add to Cart Section */}
              <div className="w-3/12 relative">
                <img
                  src={LOGO_CDN + item.card.info.imageId}
                  className="w-full rounded-3xl"
                />

                {itemCount === 0 ? (
                  <button
                    className="absolute top-28 left-10 text-pink-400 bg-white p-2 rounded-lg font-bold shadow-sm shadow-black w-24 h-10 
               flex items-center justify-center text-lg hover:bg-gray-200 transition-all duration-200 ease-in-out"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                ) : (
                  <div
                    className="absolute top-28 left-10 text-pink-400 bg-white p-2 rounded-lg font-bold shadow-sm shadow-black w-24 h-10 
               flex items-center justify-between text-lg"
                  >
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="px-3 hover:bg-gray-200 rounded-md transition-all duration-200 ease-in-out"
                    >
                      -
                    </button>
                    <span>{itemCount}</span>
                    <button
                      onClick={() => handleAddItem(item)}
                      className="px-3 hover:bg-gray-200 rounded-md transition-all duration-200 ease-in-out"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Light Horizontal Line */}
            <hr className="border-gray-200 my-4" />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
