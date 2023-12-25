import { useEffect, useState } from "react";

export const useCollDb = (resId, name) => {
    const [newData, setNewData] = useState(null);
    const data = async() => {
        const URL = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7141447&lng=77.0871004&collection=${resId}&${name}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
        const getData = await URL.json();
        // console.log(await getData);
        setNewData(await getData);
    };
    useEffect(() => {
        data();
    }, [])
    return newData;
}