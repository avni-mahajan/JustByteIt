import { useEffect, useState } from "react";
const useResMenu = (resID) => { 

    const [resInfo, setResInfo] = useState(null);
    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
} 

export default useResMenu;