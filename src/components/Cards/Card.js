// import React, { useContext } from "react";
// import UserContext from "../utlities/UserContext.js";
// import "./card.css";


const Card = ({resData}) =>{

const{name,avgRatingString,cloudinaryImageId,cuisines,areaName,sla} = resData.info;
// const {loggedIn,signUp} = useContext(UserContext);
// console.log(loggedIn,signUp);
  return(
    <>
    <div data-testid="custom-element" className=" p-2 ml-1">
      <div className="w-12/12 h-52 mx-auto mt-2 ">
        <img className="w-full h-full rounded-sm shadow-lg backdrop-brightness-150 " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }  alt="Image" />
      </div>
      <div className=" mt-0.5 ml-3">
      <div>
        <p className="font-bold">{name.split(" ").slice(0,2).join(" ")}</p>
      </div>
      <div className="mt-1 flex justify-around">
      <p><span className="fa fa-star checked text-yellow-500"></span>&nbsp;&nbsp;{avgRatingString}</p>
      <p>{sla.slaString}</p>
      </div>
      <div className="mt-1">{cuisines.slice(0,2).join(",")}</div>
      <div className="mt-1 text-sm underline text-gray-500">{areaName}</div>
      </div>
    </div>
    
   
    </>
  )
}

// Higher Order Component

// CREATION OF HIGH ORDER COMPONENT WHICH TAKES ANOTHER COMPONENT AS INPUT AND RETURNS SEEMS TO BE THE ENHANCED VERSION OF THE COMPONENT.
export const BestSeller = (Card)=>{
  return(props)=>{
  return(
    <>
    <div>
      <label className=" absolute p-1 ml-3 mt-4 bg-slate-500 opacity-70 text-stone-50 z-20 font-serif">BestSeller</label>
      <Card {...props}/>
    </div>
    </>
  )
  }
}
export default Card;









