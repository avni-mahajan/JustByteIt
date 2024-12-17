import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  const { resID } = useParams(); // to fetch restaurant ID dynamically from the route

  const resInfo = useResMenu(resID);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const restaurantName =
    resInfo?.cards?.[2]?.card?.card?.info?.name ||
    "Restaurant Name Unavailable";

  const menuItems = resInfo?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards // Access REGULAR cards
    ?.flatMap((card) => card?.card?.card?.itemCards || []); // Flatten menu items

  return (
    <div className="menu">
      <h1 className="font-extrabold text-center text-4xl">{restaurantName}</h1>
      <div className = "flex flex-wrap">
        {menuItems?.map((item, index) => {
          const { name, imageId } = item?.card?.info || {};
          return (
            <div key={index} className="w-60 h-3/4 m-5 p-2 bg-yellow-50 rounded-xl hover:scale-95 hover:cursor-pointer">
              <h2 className="font-bold">{name || "Menu Item Unavailable"}</h2>
              <img
                className="w-60 h-2/3 rounded-xl"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${imageId}`}
                alt={name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;
