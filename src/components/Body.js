import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Search from "./Search";
import Carousel from "./Carousel";
import TopRes from "./TopRes";
import { API_CALL } from "../utils/constants";
import RatingAbove4 from "./filters/RatingAbove4";

const Body = () => {
  const [lisRes, setlisRes] = useState([]);
  const [flisRes, setflisRes] = useState([]);

  const [carouselRes, setcarouselRes] = useState([]);
  const [topResData, settopResData] = useState([]);

  const [searchText, setSearchText] = useState([""]);
  const onlinestatus = useOnlineStatus();

  const fetchData = async () => {
    const data = await fetch(API_CALL);
    const json = await data.json();

    setlisRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    setflisRes( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setcarouselRes(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    settopResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (onlinestatus === false) {
    return <h1 className="justify-center font-extrabold text-3xl">Oops !! Looks like you are offline</h1>;
  }

  return lisRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="mx-56 mt-6 mb-10">
        <h1 className="font-bold text-2xl">What's on your mind?</h1>
          <Carousel carouselRes={carouselRes} />
      </div>

      <div className="mx-56 my-10">
        <h1 className="font-bold text-2xl">Top restaurant chains in Jodhpur</h1>
          <TopRes topResData={topResData} />
      </div>
      
      <h1 className="font-bold text-2xl mx-56">Restaurants with online food delivery in Jodhpur</h1>
      
      <div className="flex px-48 justify-between mt-5 mx-6">
        <Search
          lisRes={lisRes}
          setflisRes={setflisRes}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <RatingAbove4 lisRes={lisRes} setflisRes={setflisRes} />
        
      </div>
     <div>
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
      
    </div>
  );
};

export default Body;
