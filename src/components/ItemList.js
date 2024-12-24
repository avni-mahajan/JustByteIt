import { useDispatch } from "react-redux";
import { LOGO_CDN } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ items }) => {
  const [countAdd, setcountAdd] = useState(0);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setcountAdd((prev) => prev + 1);
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    if (countAdd > 0) setcountAdd((prev) => prev - 1);
  };
  return (
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className=" border-gray-200 text-left flex justify-between mb-20"
          >
            <div className="w-9/12">
              <div>
                <span className="font-bold text-gray-700 text-lg">
                  {item?.card?.info?.name}
                </span>
                {/* Conditional rendering for price and finalprice */}
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
              </div>
            </div>

            <div className="w-3/12 relative">
              <img
                src={LOGO_CDN + item.card.info.imageId}
                className="w-full rounded-3xl"
              />

              {countAdd === 0 ? (
                <button
                  className="absolute top-28 left-12 text-pink-400 bg-white p-1 rounded font-bold shadow-sm shadow-black w-20"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              ) : (
                <div className="absolute top-28 left-12 text-pink-400 bg-white p-1 rounded font-bold shadow-sm shadow-black w-20 flex justify-between">
                  <button onClick={() => handleRemoveItem(item)} className="">-</button>
                  <span>{countAdd}</span>
                  <button onClick={() => handleAddItem(item)}>+</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
  );
};

export default ItemList;
