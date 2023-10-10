// import "./bodyLayout.css";
import Card from "../Cards/Card";
import { useState, useEffect } from "react";
import { RES_URL } from "../utlities/constants";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlities/Custom_hooks/useOnlineStatus";


const BodyLayout = () => {
    const [restuarantCards, setRestuarantCards] = useState(null);
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() => {
        const URL = await fetch(RES_URL);
        const json = await URL.json();
        console.log(json);
        const newData = json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        setRestuarantCards(newData);
    }
if(onlineStatus === false){
    return <h1>Error!Something Might Wrong.Check your internet Connection.</h1>
}
    if (!restuarantCards) {
        return <Shimmer / > ;
    }
    return ( 
        <>
    <div className = "w-3/5 h-full mx-auto mt-5 pt-10 pb-10" >
        <p className = "text-gray-800 text-3xl font-sans font-bold mb-5" > WELCOME50</p>  
        <div className = "w-full h-12 flex justify-center items-center" >
        <input className="border-none outline-none w-2/5 indent-1 h-8 mr-2.5 bg-gray-200 rounded-xl" type = "text" name = "search" placeholder = "Filter by cards" / >
        <button className=" bg-gray-200 p-1 rounded-xl">Search</button>  
        </div> 
        <div className="w-full flex flex-wrap justify-between items-center"> {
            restuarantCards.map((restuarant) => < Link className ="w-2/6 transition ease delay-50 hover:scale-90 mb-2 font-sans cursor-pointer "
                key = { restuarant.info.id }
                to = { "/restuarants/" + restuarant.info.id } > < Card resData = { restuarant }
                /></Link > )
        } 
        </div>  
        </div > 
        </>
    )
}

export default BodyLayout;