import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { clearItems,removeItems } from "../utlities/CartSlice/cartSlice";
import EmptyCart from "../EmptyCart/EmptyCart";
import { IMG_URL } from "../utlities/constants.js";
const Cart = ()=>{
  const dispatch = useDispatch();
  const data = useSelector((store)=>store.cart.items);
  const [CalculatePrice,setCalculatePrice] = useState(data);
  // console.log(CalculatePrice);
  const itemPrices = CalculatePrice.map(item=>item?.card?.info?.price || item?.card?.info?.defaultPrice);
  const cartTotal = itemPrices.reduce((total,price)=>total + price/100,0);
  const gstAmount = 0.18;
  const addGst = Math.round(cartTotal * gstAmount);
  const totalAmount = cartTotal + addGst;

  const handleClear = ()=>{
    dispatch(clearItems());
    setCalculatePrice([]);
  }
  const handlePopUp = ()=>{
    dispatch(removeItems());
    }
  
  // console.log(cartTotal);
 
  // }
  // const handleClear = ()=>{
  //   dispatch(clearCart());
  // }
  // const newData = data.map(asi=>console.log(asi));
  // const handleRemove = ()=>{
  //   dispatch(removeItem());
  // }
  if(data.length == 0){
    return <EmptyCart/>;
  }
  return(
    <>
  <div className="w-full h-full mt-20 p-4 flex justify-center">
    <div className="w-4/12 h-full p-2 shadow-2xl">
      <div className="w-full h-20 p-2 bg-slate-100 flex justify-between">
        <div className="w-1/4 h-16 bg-black"></div>
        <div className="w-4/6 h-16 bg-black"></div>
      </div>
      <div className="w-full h-full mt-2 p-2">
        {
          data.map((item)=>(
          <div key={item?.card?.info?.name}>
            <div className="w-full h-10 mb-4 p-1 flex items-center justify-between">
              <p className="w-6 h-6"><img className="w-full h-full" src={item?.card?.info?.itemAttribute?.vegClassifier === "VEG"?"https://th.bing.com/th?id=OIP.-byiMZuz3d9Hf0huAqIkvwHaHa&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2":"https://th.bing.com/th?id=OIP.w6vZA1LU2oGl4vbu1Q2BxQHaH0&w=243&h=256&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"} alt="lOGOS" /></p>
              <div className="w-12 h-10 bg-black">
              <img className="w-full h-full" src={item?.card?.info?.imageId === undefined?"https://st4.depositphotos.com/7819052/21803/v/450/depositphotos_218033152-stock-illustration-grunge-red-available-word-rubber.jpg":IMG_URL + item?.card?.info?.imageId} alt="Not Available" />
              </div>
              <p className=" w-5/12  ml-2 text-md text-start px-4 py-2">{(item?.card?.info?.name.split(" ").slice(0,2).join(" "))}</p>
              <p className="text-lg">&#8377;{Math.round(item?.card?.info?.price / 100) || Math.round(item?.card?.info?.defaultPrice / 100)}</p>
            </div>
          </div>
          ))
        }
        <div className="w-full h-full p-2">
          <div className="w-full h-10 flex justify-between items-center mb-2">
            <h1 className="font-bold text-xl font-serif">Bill Details:</h1>
          </div>
            <hr/>
          <div className="w-full h-10 flex justify-between items-center mb-2">
            <p>Item Total</p>
            <p>&#8377;{cartTotal.toFixed(0)}</p>
          </div>
          <div className="w-full h-10 flex justify-between items-center mb-2">
            <p>GST & Service Tax(18%)</p>
            <p>&#8377;{addGst}</p>
          </div>
          <hr/>
          <div className="w-full h-10 mb-1 flex justify-between items-center font-bold">
            <p>TO PAY</p>
            <p>&#8377;{totalAmount.toFixed(0)}</p>
          </div>
        </div>
       <div className=" flex justify-around">
        <button className="bg-black text-white p-2 rounded-lg" onClick={()=>handleClear()}>Clear Cart</button>
        <button className="bg-black text-white p-2 rounded-lg" onClick={()=>handlePopUp()}>Remove Cart</button>
       </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Cart;





