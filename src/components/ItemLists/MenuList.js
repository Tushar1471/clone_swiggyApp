import { useDispatch } from "react-redux";
import { IMG_URL } from "../utlities/constants";
import { addItems } from "../utlities/CartSlice/cartSlice";

const MenuList = ({itemCards})=>{
  // console.log(itemCards);
  const dispatch = useDispatch();
  const handleClick = (item)=>{
    dispatch(addItems(item));
    // console.log(item);
  }
  return(
    <>
    <div className="w-8/12 mx-auto h-full">
     {itemCards.map(item=>(
      <div key={item.card.info.id}>
         <div className="w-full h-full mb-2 flex justify-center items-center mt-4" data-testid = "foodItems">
       <div className="w-4/5 p-2 flex items-center">
        <div className="w-full text-left p-1">
          <p className="font-bold">{item.card.info.name}</p>
          <p>&#8377;{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
          <p className="text-justify text-sm">{item.card.info.description}</p>
        </div>
       </div>
       <div className="w-2/5 h-full  flex justify-end p-2 relative ">
        <div className="w-2/4 h-full p-2 flex justify-center items-start">
          <div className="px-5 py-2 mt-12 absolute rounded-md bg-white shadow-md text-green-500 z-10" onClick={()=>handleClick(item)}>
            <button className="w-full h-full">Add</button>
          </div>
          <div className="w-3/4 h-16 ">
            <img className="w-full h-full" src={item?.card?.info?.imageId === undefined?"https://st4.depositphotos.com/7819052/21803/v/450/depositphotos_218033152-stock-illustration-grunge-red-available-word-rubber.jpg":IMG_URL + item?.card?.info?.imageId} alt="Not Available" />
          </div>
        </div>
       </div>
     </div>
     <br/>
     <hr />
      </div>
     ))}
  </div>
    </>
  )
}

export default MenuList;