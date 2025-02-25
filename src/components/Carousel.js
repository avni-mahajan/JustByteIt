import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselImg } from "../utils/constants";

const Carousel = ({ carouselRes }) => {
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
    <div className="relative mx-56 mt-6 mb-10">
      <h1 className="font-bold text-2xl mb-4">What's on your mind?</h1>

      <div className="absolute top-2 right-4 flex space-x-2 z-10">
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

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-none py-4 scroll-smooth"
      >
        {carouselRes.map((restaurant) => (
          <div key={restaurant?.id} className="mx-2 flex-shrink-0">
            <img
              src={carouselImg + restaurant?.imageId}
              alt={restaurant?.name}
              className="w-40 h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Carousel;
