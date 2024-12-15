import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_A } from "../utils/constants";
import { MENU_B } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resID } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []); // Empty dependency array ensures it runs only once

    // Fetch menu details
    const fetchMenu = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=805211&catalog_qa=undefined&submitAction=ENTER");
            const json = await response.json();
            setResInfo(json.response);
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };

    

    // Show loading shimmer until data is fetched
    if (resInfo===null) {
        return <Shimmer />;
    }

    // Safely access nested properties
    // const info =
    //     resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards?.card?.info;

    // Fallback if info is unavailable
    // if (!info) {
    //     return <div>No menu information available</div>;
    // }

    // const { name = "Menu Name Unavailable", description = "No description provided" } = info;
    const {name } = resInfo?.cards[0]?.card?.text || "Menu Name Unavailable";

    const {itemCards } = resInfo?.cards[2]?.groupedCard?.cardsGroupMap?.REGULAR?.cards[1]?.card?.card || "Menu Name Unavailable";

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h1>{itemCards[0]?.card?.info?.name}</h1>
            {/* <p>{description}</p> */}
        </div>
    );
};

export default ResMenu;
