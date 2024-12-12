import ResCard from "./ResCard"
import { useState, useEffect } from "react"

const Body = () => {
    const[lisRes, setlisRes] =  useState([]);  //has to be declared inside the component !!!!!!!

    const fetchData = async() =>{   //fetch data from an api !!!!!

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");    //we use asynch and await to resolve promise
        const json = await data.json();   //convert the data fetched to json

        setlisRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //to update the new  rendered data on UI !!!!!!!!!

    };


    useEffect(()=>{ fetchData() },[]);
    

    
    return (
        <div className="body">
            <div className="search"> 
                 <input type="text" placeholder="search here..." />
            </div>
            <div className="filter">
                <button className="filter-btn" onClick = { () => {
                    const filteredLis = lisRes.filter( (res) => { return (res.info.avgRating >= 4.5 )} );
                    setlisRes(filteredLis);
                }
                }> Click me</button>
            </div>
            <div className = "res-container">
                {
                    lisRes.map(
                        (restaurant) => (<ResCard key = {restaurant?.info?.id} resData={restaurant}/>)
                    )
                }
            </div>
        </div>
    )
}

export default Body;