import React, { createFactory, lazy, Suspense, useContext, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// Default Import
import Header from "./components/Header";
// Named Import
import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";

import {Provider} from "react-redux"
import store from "./utils/store";
import Cart from "./components/Cart";

// import Instamart from "./components/Instamart";
const Instamart= lazy( ()=> { return import("./components/Instamart") } )



// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)




const AppLayout = () => {

  const [user, setUser] = useState({
    name: "Taylor Swift",
    email: "tay@gmail.com"
  })

  return (
    <Provider store={store}>
      <userContext.Provider value={{ user:user, setUser:setUser }} >
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <AboutUs />,
        children:[
          {
            path:"profile",
            element: <Profile />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact  />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />
      },
      {
        path:"/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
          )
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
