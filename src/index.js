import React from "react";
import  ReactDOM  from "react-dom/client";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import "./style.css";
import ProductMenu from "./components/ProductMenu";
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


const router = createBrowserRouter([
    { path: "/",
    element: <AppLayout />,
    children:[
        { path: "/",
        element:<Products/>
        }, 
       
        { path: "/contact",
        element: <Contact />
        },
        { path: "/products/:productId",
        element: <ProductMenu />
        }
],
    errorElement:<Error/>},
   
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)
