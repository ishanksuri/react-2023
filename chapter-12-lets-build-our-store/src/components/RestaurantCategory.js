// import { useState } from "react";
import Itemlist from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  //   console.log(data);

  //by default: false means accordian body is closed. onClick in the header will make it expand
  //lifting the state up- making RestaurantCatgory.js a CONTROLLED COMPONENT( REMOVING showItems- it doesn't have its own state)
  // const [showItems, setShowItems] = useState(showItems);

  //when we click , this function is responsible for show/hide the accordian body
  const handleClick = () => {
    // console.log("clicked");
    // if showItems === false the {showItems = true }; if showItems === true {showItems = false }
    // setShowItems(!showItems);

    //Lifting the state up- advance concept, indirectly using child we can do that, we can pass setShowIndex to the children
    //as soon as we click here, it will just change the setShowIndex of its parent according to the click here and all the others will be collapse
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        {/* Accordian Header*/}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Body*/}
        {showItems && <Itemlist items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
