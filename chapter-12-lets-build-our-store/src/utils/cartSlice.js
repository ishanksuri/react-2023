import { createSlice, current } from "@reduxjs/toolkit";

//createSlice is a function which takes configuration to create a slice & returns an object
const cartSlice = createSlice({
  //1st config: name of slice, 2nd config: Intial State, means what will be cart items
  //3rd Config: reducer functions corresponding to each actions
  name: "cart",
  initialState: {
    items: [],
  },
  //while creating cartSlice, reducers contains multiple reducer functions( named on actions ) such as addItem, removeItem, clearCart
  reducers: {
    addItem: (state, action) => {
      // we're mutating the state over here, directly modifying the state over here
      // modifying state i.e initial state( we have to mutate the state now)
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //right way to directly mutate the state
      // state.items.length = 0; //[]
      // or
      return { items: [] };

      // there is a reason, this will not work- wrong way- just modifying local variable "state" not acctual current state
      // console.log(current(state));
      // state = [];
      // console.log(state);
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

//exporting reducer: combination of all reducers functions addItem, removeItem, clearCart
export default cartSlice.reducer;
