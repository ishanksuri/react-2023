import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";

// chunking
// code splitting
// Dynamic Bundling
// Lazy Loading
// on demand loading
// dynamic import

//import Grocery in our app by using something called lazy provides to us by react
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  //How to pass and update UseContext information in our app-
  const [userName, setUserName] = useState();
  //assume this is authentication & an API giving us userInfo
  useEffect(() => {
    //Assume we have made an API call to send username and password
    const data = {
      name: "Ishank updated value",
    };
    setUserName(data.name);
  }, []);

  //printing virtual DOM( object ) which is representation of Actual DOM
  // console.log(<Body />);
  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          <Header />
        </UserContext.Provider>

        {/* part3- header is always on top & body will keep on changing acc to the routes */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

//client side routing
//Part1: routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//render React Component
// root.render(<AppLayout />);
//Part2: RouterProvider actually provides part1: routing configuration to our app
// RouterProvider is an component exported from react-router-dom library
root.render(<RouterProvider router={appRouter} />);
