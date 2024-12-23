import { LOGO_CDN } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    deliveryTime,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  return (
    <div className="w-60 h-3/4 m-5 p-2 rounded-xl hover:scale-95 hover:cursor-pointer transition-all ease-in delay-100">
      <div className="relative w-full h-48 sm:w-72 lg:h-40 lg:w-64">
        {cloudinaryImageId && (
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={LOGO_CDN + cloudinaryImageId}
            alt={name}
          />
        )}

        {aggregatedDiscountInfoV3 && (
          <span className="flex absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent shadow-md text-white p-3 rounded-b-2xl">
            <h1 className="text-2xl font-extrabold">
              {aggregatedDiscountInfoV3?.header}
              {aggregatedDiscountInfoV3?.subHeader && (
                <span>&nbsp;{aggregatedDiscountInfoV3.subHeader}</span>
              )}
            </h1>
          </span>
        )}
      </div>

      <h2 className="font-bold truncate">{name}</h2>
      <div className="flex">
        <h4>{avgRating + " " + "stars"}</h4>
        <h4>{costForTwo}</h4>
      </div>
      <h4 className="truncate">{cuisines.join(", ")}</h4>
    </div>
  );
};

export default ResCard;
