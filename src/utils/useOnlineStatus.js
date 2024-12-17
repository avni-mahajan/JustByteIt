import {useState, useEffect} from "react";
const useOnlineStatus = () => {
    const [onlinestatus, setonlinesatus] = useState(navigator.onLine);

    useEffect( ()=> {
        window.addEventListener("online" , () => {
            setonlinesatus(true);
        });

        window.addEventListener("offline" , () => {
            setonlinesatus(false);
        });

        return ()=>{
            window.removeEventListener("online" , () => {
                setonlinesatus(true);
            });
    
            window.removeEventListener("offline" , () => {
                setonlinesatus(false);
            });

            }; //to remove event listenors after use

    },[] );



    return onlinestatus;
}

export default useOnlineStatus;