// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


import React from "react";
import { lazy, Suspense } from "react";
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
