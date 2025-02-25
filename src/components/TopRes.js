import { useRef } from "react";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TopRes = ({ topResData }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-0">
        <h1 className="font-bold text-2xl">Top restaurant chains in Chandigarh</h1>
        <div className="flex space-x-2">
          <button
            className="p-2 bg-white shadow-md rounded-full hover:bg-gray-200"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="p-2 bg-white shadow-md rounded-full hover:bg-gray-200"
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-none scroll-smooth space-x-4 py-2"
      >
        {topResData.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}>
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default TopRes;
