import { carouselImg } from "../utils/constants";

const Carousel = ({ carouselRes }) => {
  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div className="flex overflow-x-auto scrollbar-none scrollbar-thumb-pink-400 scrollbar-track-pink-200 py-4">
        {carouselRes.map((restaurant) => (
          <div key={restaurant?.id} className="mx-2 flex-shrink-0">
            <img
              src={carouselImg + restaurant?.imageId}
              alt={restaurant?.name}
              className="w-40 h-auto"
            />
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
};

export default Carousel;
