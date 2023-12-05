// import "./restaurantsMenu.css"
import { useState } from "react";
import {useParams} from "react-router-dom";
import useRestuarantMenu from "../utlities/Custom_hooks/useRestuarantMenu";
import RestuarantAcc from "../Accordians/RestuarantAcc";

const RestaurantsMenu = () =>{
const [showIndex,setShowIndex] = useState(null);
// const [isAccordionOpen,setAccordionOpen] = useState(n);
const {resId} = useParams();
const resMenuData = useRestuarantMenu(resId);
if(!resMenuData) return <h2>Loading</h2>;

const resMenuFirst = resMenuData.cards[0].card.card;
const {name,cuisines,areaName,avgRating,costForTwoMessage,totalRatingsString} = resMenuFirst?.info;
const resMenuSecond = resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card;
const resMenuThird = resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards;
const menuCards = resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
const categories = menuCards.filter(c=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  return(
    <>
    <div className=" mt-24 text-center">
      <p className="text-red-800 text-4xl font-bold mb-5">{name}</p>
        <div className=" w-6/12 mx-auto flex justify-around items-center">
          <p className="mt-1">{cuisines.join(",")}</p> 
          <p>{areaName}</p>
          <p>{avgRating}</p>
          <p>{costForTwoMessage}</p>
          <p>{totalRatingsString}</p>
        </div>
      <div className="mt-5">
      {categories.map((c,index)=>
      // Lifting State up
      // controlled component
      <RestuarantAcc key={c?.card?.card?.title}data ={c?.card?.card} index={index} itemCards={c?.card?.card?.itemCards} 
      showIndex={showIndex}
       setShowIndex={setShowIndex}  />
      )}
      </div>
    </div>
    </>
  )
}



export default RestaurantsMenu;


