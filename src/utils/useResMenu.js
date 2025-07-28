import { useEffect, useState } from "react";

const useResMenuData = (
  JUSTBYTEIT_MENU_API_URL,
  resId,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY
) => {
  const [restaurant, setRestaurant] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (resId) {
      fetchRestaurantData();
    }
  }, [resId]);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(`${JUSTBYTEIT_MENU_API_URL}${resId}`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();

      //Extract restaurant info
      const restaurantData =
        data?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x?.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      //Extract menu categories
      const regularCards =
        data?.data?.cards
          ?.find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const itemCategories = regularCards
        .map((x) => x.card?.card)
        .filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY && x?.title && x?.itemCards);

      setCategories(itemCategories);
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
      setRestaurant(null);
      setCategories([]);
    }
  };

  return [restaurant, categories];
};

export default useResMenuData;
