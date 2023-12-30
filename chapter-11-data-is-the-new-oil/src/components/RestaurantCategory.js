import { useState } from "react";
import Itemlist from "./ItemList";

const RestaurantCategory = ({ data }) => {
  //   console.log(data);

  //by default: false means accordian body is closed. onClick in the header will make it expand
  const [showItems, setShowItems] = useState(false);

  //when we click , this function is responsible for show/hide the accordian body
  const handleClick = () => {
    // console.log("clicked");
    // if showItems === false {showItems = true }; if showItems === true {showItems = false }
    setShowItems(!showItems);
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
        {showItems && <Itemlist items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
