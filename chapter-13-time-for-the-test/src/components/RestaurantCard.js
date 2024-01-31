import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";

const RestaurantCard = (props) => {
  //obj
  // console.log(props);
  const { resData } = props;
  // console.log(resData);

  const { loggedInUser } = useContext(UserContext);

  //Destrtucturing
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    isNewlyOnboarded,
  } = resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      {/* <h4>₹{costForTwo / 100} FOR TWO</h4> */}
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
// INPUT- RestaurantCard component
// OUTPUT- generate new enhanced "RestaurantCard" component(which is basically a js function()) with New Restaurant/veg/promoted label on it

export const withNewLabel = (RestaurantCard) => {
  // its returning component which returns a piece of JSX
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-700 text-white m-2 p-2 rounded-lg">
          New Restaurant
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
