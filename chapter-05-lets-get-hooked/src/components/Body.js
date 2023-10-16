import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //State Variable - Super powerful Variable
  //Version 1
  // const [listOfRestaurants, setlistOfRestaurants] = useState([
  //   {
  //     data: {
  //       id: "74453",
  //       name: "KFC",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       costForTwo: 40000,
  //       deliveryTime: 45,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "74454",
  //       name: "Domino's Pizza",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       costForTwo: 40000,
  //       deliveryTime: 45,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "74455",
  //       name: "MCD",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       costForTwo: 40000,
  //       deliveryTime: 45,
  //       avgRating: "4.3  ",
  //     },
  //   },
  // ]);

  //version 2- using mock data with state variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantList);

  //above, this is array destructuring basically- return an array
  //example
  // const arr = useState(restaurantList);
  // const [listOfRestaurants, setlistOfRestaurants] = arr;
  // which means
  // const listOfRestaurants = arr[0]
  // const setlistOfRestaurants = arr[1]

  //Normal JS variable
  // let listOfRestaurantsJS = [
  //   {
  //     data: {
  //       id: "74453",
  //       name: "KFC",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       costForTwo: 40000,
  //       deliveryTime: 45,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "74454",
  //       name: "Domino's Pizza",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       costForTwo: 40000,
  //       deliveryTime: 45,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "74455",
  //       name: "MCD",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       costForTwo: 40000,
  //       deliveryTime: 45,
  //       avgRating: "4.3  ",
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("Button Clicked");
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            //This is the trigger- every time state variable changes, it will reflect on UI. that's how we modify or update state variable in React
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* 1st way  */}
        {/* its like calling the same js funcion multiple times */}
        {/* <RestaurantCard resData={restaurantList[0]} />
          <RestaurantCard resData={restaurantList[1]} /> */}

        {/* 2nd way  */}
        {/* Creating RestaurantCard dynamically from restaurantList(15 objects) using map function in JS, Usaing brackets because its an JS object  */}
        {/* Note: whenever you're looping onto List or anything, you always have to give key over here.
          But Why ?  check notes */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
