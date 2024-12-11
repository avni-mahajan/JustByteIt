import { LOGO_CDN } from "../utils/constants";

const ResCard = (props) =>{
    const {resData} = props;
    const {name , cuisines , deliveryTime , avgRating , cloudinaryImageId , costForTwo } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-img" src={LOGO_CDN + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating + " " + "stars"}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResCard;