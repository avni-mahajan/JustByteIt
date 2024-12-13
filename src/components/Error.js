import { LOGO_ERR } from "../utils/constants";
import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();

    return (
        <div className="Error">
            <img className = "errCat" src = {LOGO_ERR}/>
            <h1 className="errInfo">{err.status} : {err.statusText}</h1>
        </div>
    )
};

export default Error;