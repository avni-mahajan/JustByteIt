import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import starRating from "../utils/images/star-rating.png";
import DealsAndTopPick from "./DealsAndTopPick";

const ResMenu = () => {
  const { resID } = useParams(); // to fetch restaurant ID dynamically from the route
  const resInfo = useResMenu(resID);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const categories = resInfo?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
  } = resInfo?.cards?.[2]?.card?.card?.info;

  return (
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
      {/* <DealsAndTopPick resInfo={resInfo}/> */}

      <div>
        {categories.map((category, index) => (
          <ResCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
