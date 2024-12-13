import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [buttonClick, setbuttonClick] = useState(["login"]);

    return(
    <div className = "header">
        <div className = "logo-container">
            <img className = "logo" src={LOGO_URL}/>
        </div>
        <div className="nav-bar">
            <ul>
                <li id="home">
                <Link to = ""> Home</Link> 
                </li>
                <li id="about">
                <Link to = "/about">About Us</Link> 
                </li>
                <li id="contact">
                <Link to = "/contact">Contact Us</Link>
                </li>
                <li id="cart">Cart</li>
                <li id="login" onClick={()=> {
                    buttonClick=== "login" ? setbuttonClick("logout") :setbuttonClick("login") ;
                }}>{buttonClick}</li>
            </ul>
        </div>
    </div>
)}

export default Header;