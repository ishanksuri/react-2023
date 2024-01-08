import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//Redux Store- slices will be added inside it
const appStore = configureStore({
  //how to add slice to the store
  // this is one big reducer basically responsible to modify appStore, and
  // it consists of small reducers from different slices
  // each slice will have its own reducer eg: cart has cartReducer, user: userReducer etc
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
