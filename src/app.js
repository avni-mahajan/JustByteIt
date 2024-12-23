import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import ResMenu from "./components/ResMenu";
import {lazy} from "react"; //for lazy loading
import { Provider } from "react-redux"; //redux (state managment)
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy (()=> import("./components/Grocery"));  //importing element we want to lazy load 

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    return (
        <Provider store = {appStore} >
        <div className = "app">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : 
        [{
            path : "/",
            element : <Body/>,
        },
        {
            path : "/about",
            element : <About/>,
        },
        {
            path : "/grocery",
            element : <Suspense fallback = {<h1>Loading...</h1>}> <Grocery/> </Suspense>,
        },
        {
            path : "/contact",
            element : <Contact/>,
        },
        {
            path : "/restaurant/:resID",
            element : <ResMenu/>,
        },
        {
            path : "/cart",
            element : <Cart/>,
        }
    ],
        errorElement : <Error />,
    }
]);

root.render(<RouterProvider router = {appRouter}/>);


