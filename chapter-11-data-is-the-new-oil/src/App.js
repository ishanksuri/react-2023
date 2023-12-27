import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";

// chunking
// code splitting
// Dynamic Bundling
// Lazy Loading
// on demand loading
// dynamic import

//import Grocery in our app by using something called lazy provides to us by react
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  //printing virtual DOM( object ) which is representation of Actual DOM
  // console.log(<Body />);
  return (
    <div className="app">
      <Header />
      {/* part3- header is always on top & body will keep on changing acc to the routes */}
      <Outlet />
    </div>
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
