import { createSlice } from "@reduxjs/toolkit";

//createSlice is a function which takes configuration to create a slice & returns an object
const cartSlice = createSlice({
  //1st config: name of slice, 2nd config: Intial State, means what will be cart items
  //3rd Config: reducer functions corresponding to each actions
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // we're mutating the state over here, directly modifying the state over here
      // modifying state i.e initial state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; //[]
      // there is a reason, this will not work
      // state = []
    },
  },
});

// dummy "cartSlice object" which createSlice has created
// {
//   actions: {
//     addItem
//   },
//   reducer
// }

//exporting actions- need to export individually
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//exporting reducers
export default cartSlice.reducer;
