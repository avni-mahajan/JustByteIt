import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error />,
    },
    {
        path : "/about",
        element : <About/>,
    },
    {
        path : "/contact",
        element : <Contact/>,
    },
]);

root.render(<AppLayout/>);


