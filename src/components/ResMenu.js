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
      
    </div>
  );
};

export default ResMenu;
