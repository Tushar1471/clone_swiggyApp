import { useEffect } from "react";
// import { RES_URL } from "../constants"
import { useDispatch } from "react-redux";
import { addBannerItems } from "../bannerSlice";
// import { useState } from "react";
export const useFetchData = (URL) => {
    const dispatch = useDispatch();
    const fetchData = async() => {
        const data = await fetch(URL);
        const getData = await data.json();
        const newData = await getData.data;
        // console.log(newData);
        dispatch(addBannerItems(await newData));

    }
    useEffect(() => {
        fetchData();
    }, []);
}