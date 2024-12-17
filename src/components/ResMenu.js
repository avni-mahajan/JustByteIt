import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  const { resID } = useParams(); // to etch restaurant ID dynamically from the route

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
      <h1>{restaurantName}</h1>
      <div className = "items">
        {menuItems?.map((item, index) => {
          const { name, imageId, description } = item?.card?.info || {};
          return (
            <div key={index} className="menu-item">
              <h2>{name || "Menu Item Unavailable"}</h2>
              <img
                className="menu-pic"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${imageId}`}
                alt={name}
              />
              <p>{description || "No description available"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;
