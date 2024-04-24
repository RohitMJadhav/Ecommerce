import React from "react";
import { lazy, Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import "../index.css";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

// import RestaurantMenu from "./components/RestaurantMenu";
import Header from "./components/Header";

import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";


const AppLayout=()=>{
    return(
        <>
       <Header/>
       <Outlet/>
        </>
    )
}

const About=lazy(()=>import("./components/About"));

const router = createBrowserRouter([
    { path: "/",
    element: <AppLayout />,
    children:[
        { path: "/",
        element:<Products/>
        }, 
        { path: "/about",
          element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
        },
        { path: "/contact",
        element: <Contact />
        },
        // { path: "/restaurants/:restId",
        // element: <RestaurantMenu />
        // }
],
    errorElement:<Error/>},
   
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)
