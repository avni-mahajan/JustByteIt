import { useState } from "react";
import ItemList from "./ItemList";

const Rescategory = ({ data }) => {
  const [showItems, setshowItems] = useState(false);
  const handleClick = () => {
    setshowItems(!showItems);
  };

  return (
    <div className="p-4 mx-auto">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <div>
          {showItems ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-400 w-8 h-8"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.293 5.293a1 1 0 0 1 1.414 0L8 7.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-400 w-8 h-8"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.293 10.707a1 1 0 0 1 1.414 0L8 8.414l2.293 2.293a1 1 0 0 1 1.414-1.414l-3-3a1 1 0 0 1-1.414 0l-3 3a1 1 0 0 1 0 1.414z" />
            </svg>
          )}
        </div>
      </div>
      <div>{showItems && <ItemList items={data?.itemCards} />}</div>
    </div>
  );
};

export default Rescategory;
