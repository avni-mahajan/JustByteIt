import { carouselImg } from "../utils/constants";

const Carousel = ({ carouselRes }) => {
  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div className="flex overflow-x-auto scrollbar scrollbar-thumb-yellow-400 scrollbar-track-yellow-100 py-4">
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
    </div>
  );
};

export default Carousel;
