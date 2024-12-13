import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_A } from "../utils/constants";
import { MENU_B } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResMenu = () => {

    const[resInfo, setresInfo] = useState(null);
    const{resID} = useParams();

    const fetchMenu = async () => {
        const data = await fetch(MENU_A+ resID +MENU_B);
        const json = await data.json();
        setresInfo(json.data);
    }

    useEffect( ()=> { fetchMenu(); },[]);
    

    if(resInfo=== null) {
        return <Shimmer/> 
    }

    const {name} = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[0]?.card?.card?.itemCards?.card?.info ;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default ResMenu;