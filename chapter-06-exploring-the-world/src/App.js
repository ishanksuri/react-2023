import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  //printing virtual DOM( object ) which is representation of Actual DOM
  console.log(<Body />);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//render React Component
root.render(<AppLayout />);
