import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Search from "./Search";

const Body = () => {
  const [lisRes, setlisRes] = useState([]);
  const [flisRes, setflisRes] = useState([]);

  const [searchText, setSearchText] = useState([""]);
  const onlinestatus = useOnlineStatus();

  console.log({ lisRes });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlisRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //to update the new  rendered data on UI
    setflisRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (onlinestatus === false) {
    return <h1>Oops !! Looks like you are offline</h1>;
  }

  return lisRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex px-48 justify-between mt-5 mx-6">
        <Search
          lisRes={lisRes}
          setflisRes={setflisRes}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <div className="filter">
          <button
            className="bg-yellow-300 rounded-lg w-40 text-yellow-700"
            onClick={() => {
              const filteredLis = lisRes.filter((res) => {
                return res.info.avgRating >= 4;
              });
              setflisRes(filteredLis);
            }}
          >
            Top restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap px-48">
        {flisRes.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
