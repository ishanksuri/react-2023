import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Itemlist = ({ items, dummy }) => {
  // console.log(items);

  // props drilling
  // console.log(dummy);

  const dispatch = useDispatch();

  //redux- dispatching an action after click on the button
  const handleAddItem = (item) => {
    //Dispatch an action
    // "pizaah" is equal to action.payload
    // dispatch(addItem("pizzaah"));
    // item- is a big object
    //item is equal to action.payload
    dispatch(addItem(item));
  };
  return (
    <div>
      {/* parent-div accrodian body  */}
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          {/* name, price, description */}
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          {/* image */}
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-5 rounded-lg bg-gray-700 text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
