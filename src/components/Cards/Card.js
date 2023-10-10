// import "./card.css";

const Card = ({resData}) =>{

const{name,avgRatingString,cloudinaryImageId,cuisines,areaName,sla} = resData.info;
  return(
    <>
    <div>
      <div className="w-11/12 h-52 mx-auto mt-1">
        <img className="w-full h-full rounded-sm shadow-lg backdrop-brightness-150 " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }  alt="Image" />
      </div>
      <div className=" mt-0.5 ml-3">
      <div>
        <p className="font-bold">{name}</p>
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

export default Card;