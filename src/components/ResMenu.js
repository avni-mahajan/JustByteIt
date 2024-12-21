import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {
  const { resID } = useParams(); // to fetch restaurant ID dynamically from the route

  const resInfo = useResMenu(resID);

  if (resInfo === null) {
    return <Shimmer/>;
  }

  console.log(resInfo);

  const categories = resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
                     ?.filter((card) => card?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 

  console.log(categories);

  const restaurantName = resInfo?.cards?.[2]?.card?.card?.info?.name || "Restaurant Name Unavailable";

  const menuItems = resInfo?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards // Access REGULAR cards
    ?.map((card) => card?.card?.card?.itemCards || []); 

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-10">{restaurantName}</h1>
      <div>
        {categories.map((category) => <ResCategory key={category?.card?.card.title} data = {category?.card?.card}/>)}
      </div>
    </div>
  );
};

export default ResMenu;
