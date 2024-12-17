import { useState } from "react";
import logo from "../utils/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {

    const [buttonClick, setbuttonClick] = useState(["login"]);

    return(
    <div className = "flex justify-around shadow-md">
        <div className = "w-20 m-2">
            <img className = "logo" src={logo}/>
        </div>
        <div className="flex">
            <ul className="flex m-2 ">
                <li className="p-5 hover:text-yellow-600 hover:cursor-pointer">
                <Link to = ""> Home</Link> 
                </li>
                <li className="p-5 hover:text-yellow-600 hover:cursor-pointer">
                <Link to = "/about">About Us</Link> 
                </li>
                <li className="p-5 hover:text-yellow-600 hover:cursor-pointer">
                <Link to = "/grocery">Grocery</Link> 
                </li>
                <li className="p-5 hover:text-yellow-600 hover:cursor-pointer">
                <Link to = "/contact">Contact Us</Link>
                </li>
                <li className="p-5 hover:text-yellow-600 hover:cursor-pointer">Cart</li>
                <li className="p-5 hover:text-yellow-600 hover:cursor-pointer" onClick={  
                    () => {
                    buttonClick=== "Login" ? 
                    setbuttonClick("Logout") 
                    :setbuttonClick("Login") ;
                }}>
                {buttonClick}
                </li>
            </ul>
        </div>
    </div>
)}

export default Header;