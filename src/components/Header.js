import { LOGO_URL } from "../utils/constants"
const Header = () => {
    let buttonClick = "login";

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
                    buttonClick="logout";
                    console.log(buttonClick);
                }}>{buttonClick}</li>
            </ul>
        </div>
    </div>
)}

export default Header;