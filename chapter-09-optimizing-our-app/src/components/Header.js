// import foodLogo from "../../Images/food_logo.jpg";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  //simple JS variable
  // let btnName = "Login";
  //special React local state variable
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log(
  //   "checking: It will re-render the whole Header component after clicking Login button"
  // );

  //using custom-hook-2-useOnlineStatus here
  const onlineStatus = useOnlineStatus();

  //Type1
  // if no dependency array, then useEffect is still called on every render
  // useEffect(() => {
  //   console.log("useEffect called");
  // });

  // Type2
  // if dependency array is empty = [], then useEffect is called on initial render (just once)
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);

  //Type3
  //if dependency array is [btnNameReact], then useEffect is called everytime btnNameReact is updated
  useEffect(() => {
    // console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          //src={foodLogo}
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
