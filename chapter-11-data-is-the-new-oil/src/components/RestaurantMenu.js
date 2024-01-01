// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //using state variable to dynamically the data on UI
  //1st Api call will be made using useEffect, then 2nd that data will be stored in state variable
  // & whenever my state variable updates, it will automatically update the UI

  //does not have to manage its own state, since we have created useRestaurantMenu
  //intially, resInfo is null
  // const [resInfo, setResInfo] = useState(null);

  //params is the object with the resId
  // const params = useParams();
  // console.log(params);

  //Extracting the resId from params
  const { resId } = useParams();
  // console.log(resId);

  //part1: converting this part of functionality into a custome hook
  //fetchMenu will be called once only after intial render as it has empty dependency array
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   let jsonData = await data.json();
  //   console.log(jsonData);
  //   setResInfo(jsonData.data);
  // };

  // PART: 2 using custom hook useRestaurantMenu to get the data of restaurants( resInfo )
  const resInfo = useRestaurantMenu(resId);

  // whatever the showIndex is, that accordion will be expanded and everything else will remain collapse
  // const [showIndex, setShowIndex] = useState(0);
  // If we don't want to expand anything at start, set it to null
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  //Destructuring
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(itemCards);
  // unfiltered
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // filtered based on category
  // console.log(categories);

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {/* categories accordion, for each category we want that accordian item */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          // lifting the state up- controlling RestaurantCatgory( is a CONTROLLED COMPONENT ) via props
          showItems={index === showIndex ? true : false}
          // indirectly children is giving updated index & setting it up( when clicked (handleClick in child))
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
