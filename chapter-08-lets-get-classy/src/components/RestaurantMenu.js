import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  //using state variable to dynamically the data on UI
  //1st Api call will be made using useEffect, then 2nd that data will be stored in state variable
  // & whenever my state variable updates, it will automatically update the UI

  //intially, resInfo is null
  const [resInfo, setResInfo] = useState(null);

  //params is the object with the resId
  // const params = useParams();
  // console.log(params);

  //Extracting the resId from params
  const { resId } = useParams();
  console.log(resId);

  //fetchMenu will be called once only after intial render as it has empty dependency array
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    let jsonData = await data.json();
    console.log(jsonData);
    setResInfo(jsonData.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  //Destructuring
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      <h2>Menu</h2>
      <ul>
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li> */}
        {/* using map */}
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} - {" Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
