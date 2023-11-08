// import foodLogo from "../../Images/food_logo.jpg";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  //simple JS variable
  // let btnName = "Login";
  //special React local state variable
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log(
  //   "checking: It will re-render the whole Header component after clicking Login buttotn"
  // );
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
