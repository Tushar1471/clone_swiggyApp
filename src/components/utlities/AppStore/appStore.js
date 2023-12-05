// Make a redux app store

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../CartSlice/cartSlice";

const appStore = configureStore({
  // This is a big store reducer consisting of small slice reducers.
reducer:{
  cart:cartReducer,
}
});

export default appStore;