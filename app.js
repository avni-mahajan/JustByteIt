import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
    return(
    <div className = "header">
        <div className = "logo-container">
            <img className = "logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTo7Sb8iYLjFeTf-I8Rnz7qnVpPzr6EvSUQ&s"/>
        </div>
        <div className="nav-bar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)}


const AppLayout = () => {
    return (
        <div className = "app">
            <HeaderComponent/>
        </div>
    )
}

root.render(<AppLayout/>);


