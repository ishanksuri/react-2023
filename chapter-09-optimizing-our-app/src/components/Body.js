import RestaurantCard from "./RestaurantCard";
// no need of restaurantList as now working with live api data
// import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  // const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantList);
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

  //version3: When working with live API data( Swiggy ), Ideally initially listOfRestaurants should be empty
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  //for filtered restauranted using search box
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  //for input box
  const [searchText, setSearchText] = useState("");

  //Whenever state variable update, react triggers a reconcialtion cycle ( re-renders the component )
  // console.log(
  //   "checking if body will re-render again and agian as we type each letter in input search box"
  // );

  // callback function inside the useEffect will be called after the body component render cycle is complete
  useEffect(() => {
    // console.log("useEffect Called after body component is rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    //fetch is a superpower which is given to us by the browser api(js engine)
    //it will fetch data from swiggy api
    //it will return a promise, use either .then or .catch approach or use async/await
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let resJsonData = await data.json();
    // console.log(resJsonData);
    // console.log(
    //   resJsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    // );
    let arrayOfResCards = [];
    arrayOfResCards =
      //optional chaining
      resJsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(arrayOfResCards);
    //Whenever state variable update, react triggers a reconciliation cycle ( re-renders the component )
    setlistOfRestaurants(arrayOfResCards);
    //Initializing filteredRestaurant with orginal(all) restaurants
    setfilteredRestaurant(arrayOfResCards);
  };

  //custome hook 2: useOnlineStatus()- to keep track of online status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  //Conditional Rendering: logic for loading spinner/shimmer UI instead of rendering 2nd return() when listOfRestaurants is empty
  //listOfRestaurants.length === 0 , means the API hasn't responded back
  // if (listOfRestaurants.length === 0) {
  //   //spinner
  //   // return <h1>Loading....</h1>;
  //   //shimmer UI
  //   return <Shimmer />;
  // }

  // console.log("Body Rendered before useEffect called");
  // Conditional Rendering with ternary operator( condition ? true: false;)
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    //when API has responded back with data, and listOfRestaurants is not empty anymore.
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //searchText
              // console.log(searchText);
              // Filter the restaurant cards and update the UI
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("Button Clicked");
            // filter logic
            const filteredList = filteredRestaurant.filter(
              // (res) => res.data.avgRating > 4
              (res) => res.info.avgRating > 4
            );
            //This is the trigger- every time state variable changes, it will reflect on UI. that's how we modify or update state variable in React
            // setlistOfRestaurants(filteredList);
            setfilteredRestaurant(filteredList);
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

        {/*NOT RENDERING: keeping this original state variable seprated in contrast with filteredRestaurant  */}
        {/* {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}

        {/* RENDERING filteredRestaurant instead of listOfRestaurants because we need listOfRestaurants when after searcing(cafe) we could search( king ) again from the original/ untouched/unfiltered list*/}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
