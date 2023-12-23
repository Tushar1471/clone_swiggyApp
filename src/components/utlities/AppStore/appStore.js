// Make a redux app store

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../CartSlice/cartSlice";
import bannerReducer from "../bannerSlice.js";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        cards: bannerReducer,
    }
});

export default appStore;