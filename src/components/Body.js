
import mockData from "../utilis/mockData"
import ResCard from "./ResCard"
const Body = () => {
    return (
        <div className="body">
            <div className="search"> 
                 <input type="text" placeholder="search here..." />
            </div>
            <div className = "res-container">
                {
                    resList.map(
                        (restaurant) => (<ResCard key = {restaurant?.info?.id} resData={restaurant}/>)
                    )
                }
            </div>
        </div>
    )
}

export default Body;