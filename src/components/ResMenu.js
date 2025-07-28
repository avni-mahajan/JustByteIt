import { useParams } from "react-router-dom";
import {
  JUSTBYTEIT_MENU_API_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";
import ResMenuShimmer from "./ResMenuShimmer";
import useResMenuData from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import starRating from "../utils/images/star-rating.png";
console.log("Resolved starRating URL:", starRating);

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, categories] = useResMenuData(
    JUSTBYTEIT_MENU_API_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
  } = restaurant || {};

  return !restaurant ? (
    <ResMenuShimmer />
  ) : (
    <div className="mx-96">
      <div className=" p-5 rounded-[40px] my-8 bg-gradient-to-t from-gray-200 to-white">
        <h1 className="font-extrabold text-2xl mb-5 ">{name}</h1>
        <div className=" border-2 border-gray-200 rounded-[27px]  p-4 bg-white">
          <div className="flex ml-2">
            <ul className="flex ">
              <li>
                <div className="flex">
                  <img className="w-5 h-5 mt-0.5 mr-2" src={starRating} />
                  <h4 className="font-bold mr-2">
                    {avgRating}({totalRatingsString})
                  </h4>
                </div>
              </li>
              <li className="list-disc ml-4">
                <h4 className="font-bold">{costForTwoMessage}</h4>
              </li>
            </ul>
          </div>
          <h4 className="truncate ml-3 text-pink-500 font-bold text-sm my-4">
            {cuisines.join(", ")}
          </h4>
          <div className="flex">
            <h4 className="truncate ml-3 font-bold text-sm">Outlet</h4>
            <h4 className="truncate ml-3 text-gray-600 text-sm">{areaName}</h4>
          </div>
          <h4 className="truncate ml-3 text-sm font-bold">{sla?.slaString}</h4>
        </div>
      </div>

      <div>
        {categories.map((category, index) => (
          <ResCategory
            key={category?.title}
            data={category}
            initiallyOpen={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
