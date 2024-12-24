import { LOGO_CDN } from "../utils/constants";
import starRating from "../utils/images/star-rating.png"

const ResCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    sla,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    aggregatedDiscountInfoV3,
    locality,
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

      <h2 className="font-bold mt-3 ml-3 truncate text-lg">{name}</h2>
      <div className="flex ml-3">
        <ul className="flex ">
          <li> 
            <div className="flex">
              <img className="w-5 h-5 mt-0.5 mr-1" src = {starRating}/>
            <h4 className="font-semibold mr-2">{avgRating}</h4>
            </div>  
          </li>
          <li className="list-disc ml-4">  <h4 className="font-semibold">{sla?.slaString}</h4> </li>   
        </ul>
      </div>
      <h4 className="truncate ml-3 text-gray-600 ">{cuisines.join(", ")}</h4>
      <h4 className="truncate ml-3 text-gray-600 ">{locality}</h4>
    </div>
  );
};

export default ResCard;
