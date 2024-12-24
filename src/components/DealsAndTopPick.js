import { TOP_PICK_IMG } from "../utils/constants";
const DealsAndTopPick = (resInfo) => {
    const topPicks = resInfo?.cards?.[3].groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel ;
    console.log(topPicks);
    if(!topPicks || topPicks.length ===0){
        return <h1>
            Top Picks not found
        </h1>
    }
    
    return (
        <div className="m-5">
            <h1 className="text-center text-gray-700 font-semibold">~~ MENU ~~</h1>
            <div className="flex overflow-x-auto scrollbar-none py-4">
                {
                (topPicks.map((res) => (
                    <div key={res?.info?.id}>
                        <img src={TOP_PICK_IMG + res?.creativeId}/>
                    </div>
                )))
            }
            </div>
        </div>
    );
};

export default DealsAndTopPick;