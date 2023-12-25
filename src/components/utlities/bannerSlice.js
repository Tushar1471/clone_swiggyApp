import { createSlice } from "@reduxjs/toolkit";


const bannerSlice = createSlice({
    name: "cards",
    initialState: {
        nowGetData: null,
        popularCuisines: null,
        cart: null,
    },
    reducers: {
        addBannerItems: (state, action) => {
            state.nowGetData = action.payload;
        },
        addCuisines: (state, action) => {
            state.popularCuisines = action.payload;
        },
        addCart: (state, action) => {
            state.cart = action.payload;
        }
    }
})

export const { addBannerItems, addCuisines, addCart } = bannerSlice.actions;
export default bannerSlice.reducer;