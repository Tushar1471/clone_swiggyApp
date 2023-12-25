import { useEffect } from "react";
import { RES_URL } from "../constants.js"
import { useDispatch } from "react-redux";
import { addBannerItems } from "../bannerSlice";
import { useState } from "react";
// import { useSelector } from "react-redux";
export const useFetchData = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    // const store = useSelector(store => store.cards.nowGetData);
    const fetchData = async() => {
        const data = await fetch(RES_URL);
        const getData = await data.json();
        const newData = await getData.data;
        setData(newData);
        dispatch(addBannerItems(await newData));

    }
    useEffect(() => {
        !data && fetchData();
    }, []);
    return data;
}