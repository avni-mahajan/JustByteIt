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

const ResCard = () =>{
    return (
        <div className="res-card">
            <img className="res-img" src="https://images.jdmagicbox.com/v2/comp/delhi/x6/011pxx11.xx11.230101185944.w7x6/catalogue/kfc-vivekanand-puri-delhi-american-restaurants-rut6vpclea.jpg" />
            <h3>KFC</h3>
            <h3>Burgers,Fast Food,Rolls</h3>
            <h3>4.4 Stars</h3>
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search"> 
                 Search
            </div>
            <div className = "res-container">
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className = "app">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    )
}

root.render(<AppLayout/>);


