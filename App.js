import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import BodyLayout from "./src/components/BodyLayout/BodyLayout";
// Creating different routes
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignForm from "./src/components/Sign_Form/SignForm";
import Search from "./src/components/Search/Search.js";
import Help from "./src/components/Help/Help";
import Offers from "./src/components/Offers/Offers";
import Error from "./src/components/Error/Error";
import RestaurantsMenu from "./src/components/RestaurantsMenu/RestaurantsMenu";
import UserContext from "./src/components/utlities/UserContext.js";
import appStore from "./src/components/utlities/AppStore/appStore.js";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart/Cart";
import CollectionDbs from "./src/components/layouts/CollectionWoym/CollectionDbs.js";
// import { Grocery } from "./src/components/Grocery/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery/Grocery.js"));
const AppLayout = () => {
  // Some Authentication code to be written below
  const [userName, setUserName] = useState();
  useEffect(() => {
    // Make an API call to send username and password

    const data = {
      name: "Tushar Malhotra",
    };
    setUserName(data.name);
  }, []);

  const { loggedIn } = useContext(UserContext);
  // console.log(loggedIn);
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedIn: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>{" "}
      </Provider>{" "}
    </>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyLayout />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/form",
        element: <SignForm />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restuarants/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/collections/:resId/2vn",
        element: <RestaurantsMenu />,
      },
      {
        path: "/collections/:id",
        element: <CollectionDbs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1> Loading..... </h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
