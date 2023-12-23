import { SEARCH_URL } from "../constants"
import { addCuisines } from "../bannerSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export const useSearchCuis = () => {
    const dispatch = useDispatch();
    const fetchData = async() => {
        const fetchUrl = await fetch(SEARCH_URL);
        const getData = await fetchUrl.json();
        dispatch(addCuisines(getData));
    }
    useEffect(() => {
        fetchData();
    }, []);
}