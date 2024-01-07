// import foodLogo from "../../Images/food_logo.jpg";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

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

  //React hook- useContext
  const { loggedInUser } = useContext(UserContext);
  // console.log(data);

  //Subscribing to the store using a Selector- READ DATA
  //Selector- is a hook inside react, comes from react-redux library
  //useSelector gives us access to the whole store
  // but we just want to subscribe to the small portion(cart slice) of the store that is store.cart.items
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img
          className="w-32"
          //src={foodLogo}
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            Cart -({cartItems.length} items)
          </li>
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
