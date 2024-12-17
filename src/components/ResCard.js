import { LOGO_CDN } from "../utils/constants";

const ResCard = (props) =>{
    const {resData} = props;
    const {name , cuisines , deliveryTime , avgRating , cloudinaryImageId , costForTwo } = resData?.info;
    return (
        <div className="w-60 h-3/4 m-5 p-2 bg-yellow-50 rounded-xl hover:scale-95 hover:cursor-pointer">
            <img className=" w-60 h-2/3 rounded-xl" src={LOGO_CDN + cloudinaryImageId} />
            <h2 className="font-bold truncate">{name}</h2>
            <div className="flex">
            <h4>{avgRating + " " + "stars"}</h4>
            <h4>{costForTwo}</h4>
            </div>
            <h4 className="truncate">{cuisines.join(", ")}</h4>

        </div>
    )
}

export default ResCard;