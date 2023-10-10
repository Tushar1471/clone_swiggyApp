// import "./restaurantsMenu.css"
import {useParams} from "react-router-dom";
import useRestuarantMenu from "../utlities/Custom_hooks/useRestuarantMenu";

const RestaurantsMenu = () =>{
const {resId} = useParams();
const resMenuData = useRestuarantMenu(resId);
if(!resMenuData) return <h2>Loading</h2>;

const resMenuFirst = resMenuData.cards[0].card.card;
const {name,cuisines,areaName,avgRating,costForTwoMessage,totalRatingsString} = resMenuFirst?.info;
const resMenuSecond = resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card;
const resMenuThird = resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards;
// console.log(resMenuSecond);

  return(
    <>
    <div>
      <p className="text-red-800 text-4xl font-bold">{name}</p>
      <p className="mt-1">{cuisines.join(",")}</p> 
      <p>{areaName}</p>
      <p>{avgRating}</p>
      <p>{costForTwoMessage}</p>
      <p>{totalRatingsString}</p>
      <h1 className="text-red-800 text-3xl font-bold">{resMenuSecond.title}</h1>
      <div className="item_container">
        {resMenuThird.map((res)=><li className="list-none" key={res.card.info.id}>{res.card.info.name} - &#8377;{res.card.info.finalPrice / 100 || res.card.info.price / 100 || res.card.info.defaultPrice / 100}</li>)}
      </div>
    </div>
    </>
  )
}

export default RestaurantsMenu;