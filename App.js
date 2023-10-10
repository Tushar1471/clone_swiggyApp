import React,{lazy,Suspense} from "react";
// import {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import BodyLayout from "./src/components/BodyLayout/BodyLayout";
// Creating different routes
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import SignForm from "./src/components/Sign_Form/SignForm";
import Search from "./src/components/Search/Search";
import Cart from "./src/components/Cart/Cart";
import Help from "./src/components/Help/Help";
import Offers from "./src/components/Offers/Offers";
import Error from "./src/components/Error/Error";
import RestaurantsMenu from "./src/components/RestaurantsMenu/RestaurantsMenu";
// import { Grocery } from "./src/components/Grocery/Grocery";


const Grocery = lazy(()=>import("./src/components/Grocery/Grocery.js"));
const AppLayout = ()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

const appRoutes = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children :[
      {
        path:"/",
        element:<BodyLayout/>
      },
      {
        path:"/search",
        element:<Search/>
      },
      {
        path:"/offers",
        element:<Offers/>
      },
      {
        path:"/help",
        element:<Help/>
      },
      {
        path:"/form",
        element:<SignForm/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restuarants/:resId",
        element:<RestaurantsMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading.....</h1>}>
          <Grocery/>
          </Suspense>
      }
    ]
  },

])
// function delayForDemo(promise) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 5000);
//   }).then(() => promise);
// }


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);