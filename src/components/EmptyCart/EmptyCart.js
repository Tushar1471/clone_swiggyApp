import { EMPTY_URL } from "../utlities/constants";
import { Link } from "react-router-dom";
const EmptyCart = ()=>{
  return(
    <>
     <div className="w-full h-full mt-32 flex justify-center p-2">
      <div className="w-4/12 h-full p-2">
        <div className="w-3/6 h-56 mx-auto my-4">
          <img className="w-full h-full" src={EMPTY_URL} alt="Random Image" />
        </div>
        <h1 className="text-xl font-bold font-sans text-center">🛒Your Cart is Empty</h1>
        <p className="text-sm text-center">You can go to the home page to view more restuarants</p>
        <Link to={"/"}>
        <div className="w-3/6 h-8 bg-orange-600 mt-2 mx-auto shadow-lg">
          <button className="w-full h-full text-sm text-white font-bold">SEE RESTUARANTS NEAR YOU</button>
        </div>
        </Link>
      </div>
     </div>
    </>
  )
}

export default EmptyCart;