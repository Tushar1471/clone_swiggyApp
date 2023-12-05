import { createSlice } from "@reduxjs/toolkit";


// create a Slice of cart
const cartSlice = createSlice({
  name:"cart",
  initialState:{
    items:[],
  },
  reducers:{
    addItems:(state,action)=>{
    state.items.push(action.payload);
    },
    clearItems:(state)=>{
    state.items.length = 0
    },
    removeItems:(state)=>{
      state.items.pop();
    }
  }
});

export const {addItems,clearItems,removeItems} = cartSlice.actions;
export default cartSlice.reducer;


































