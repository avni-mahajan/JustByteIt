import { useState } from "react";
import { LOGO_URL } from "../utils/constants"

const Header = () => {

    const [buttonClick, setbuttonClick] = useState(["login"]);

    return(
    <div className = "header">
        <div className = "logo-container">
            <img className = "logo" src={LOGO_URL}/>
        </div>
        <div className="nav-bar">
            <ul>
                <li id="home">Home</li>
                <li id="about">About Us</li>
                <li id="contact">Contact Us</li>
                <li id="cart">Cart</li>
                <li id="login" onClick={()=> {
                    setbuttonClick("logout");
                }}>{buttonClick}</li>
            </ul>
        </div>
    </div>
)}

export default Header;