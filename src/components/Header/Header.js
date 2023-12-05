// import "./Header.css";
// import img from "./images/swiggyLogo.png";
import useOnlineStatus from "../utlities/Custom_hooks/useOnlineStatus";
import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import UserContext from "../utlities/UserContext";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

const Header = () =>{  
  const [logIn,setLoggedIn] = useState("loggedIn");
  const onlineStatus = useOnlineStatus();
  const {loggedIn,signUp} = useContext(UserContext);
  // const cartItems = useSelector((store)=>store.cart.items);
  // Subscribing to our store using selector
  const cart = useSelector(store=>store.cart.items);
  // console.log(cart);
  const handleClick = ()=>{
    logIn === "loggedIn"?setLoggedIn("loggedOut"):setLoggedIn("loggedIn");
  }
return(
<>
<div className=" w-full h-20 flex justify-center items-center fixed top-0 bg-white z-50 shadow-md ">
 <div className=" w-11/12 flex justify-evenly items-center p-2">
    <div className="w-8">
      <Link to="/"><img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt="Logo Image" /></Link>
    </div>
  <div className="flex">
    <div>
      <a href="#"><p className="mr-6 underline">Rohini</p></a>
    </div>
    <div>
      <select name="location" id="location" className=" cursor-pointer outline-none">
        <option defaultValue="roh">D-1/10A Budh Vihar Phase-1</option>
      </select>
    </div>
  </div>
  <div className="w-7/12 h-8">
    <nav className="flex justify-evenly items-center list-none h-full">
      <Link to="/search" className="hover:text-orange-500 transition ease-in-out delay-50">
      <li className="flex items-center"><span className="material-symbols-outlined mr-1.5">
          search
        </span>Search</li>
      </Link>
      <Link to="/offers"
      className="hover:text-orange-500 transition ease-in-out delay-50">
        <li className="flex items-center"><span className="material-symbols-outlined mr-1.5">
percent
</span>Offers<sup className="text-orange-400 font-bold">NEW</sup></li>
      </Link>
      <Link to="/help"
      className="hover:text-orange-500 transition ease-in-out delay-50">
        <li className="flex items-center"><span className="material-symbols-outlined mr-1.5">
help
</span>Help</li>
      </Link>
      <Link to="/form"
      className="hover:text-orange-500 transition ease-in-out delay-50">
        <li className="flex items-center">
        <span className="material-symbols-outlined mr-1.5">
login
</span>{loggedIn}</li>
      </Link>
      <Link to="/cart"
      className="hover:text-orange-500 transition ease-in-out delay-50">
        <li className="flex items-center"><span className="material-symbols-outlined mr-1.5">
shopping_cart
</span>Cart<sup data-testid="len" className="font-bold text-xl">{cart.length}</sup></li>
      </Link>
      <Link to="/grocery" className="hover:text-orange-500 transition ease-in-out delay-50">
        <li className="flex items-center"><span className="material-symbols-outlined mr-1.5">
            storefront</span>Grocery
        </li>
      </Link>
      <li><button className="font-bold flex items-center" onClick={()=>handleClick()}><span className="material-symbols-outlined">
            person
          </span>{logIn}</button>
      </li>
    </nav>
  </div>
  <p>OS:{onlineStatus?"✅":"❌"}</p>
 </div>
</div>
</>

)

};

export default Header;