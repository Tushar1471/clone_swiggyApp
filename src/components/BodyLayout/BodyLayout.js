// import "./bodyLayout.css";
import Card,{BestSeller} from "../Cards/Card";
import { useState, useEffect,useContext } from "react";
import { RES_URL } from "../utlities/constants";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlities/Custom_hooks/useOnlineStatus";
import UserContext from "../utlities/UserContext";
import ScrollBarMenu from "../BodyCompon2/ScrollBarMenu";

const BodyLayout = () => {
    const [restuarantCards, setRestuarantCards] = useState(null);
    const [filterItem,setFilterItem] = useState(null);
    const[topUp,setTopUp] = useState(null);
    // const[inputValue,setInputValue] = useState("");
    const[searchText,setSearchText] = useState("");
    const [menuCards,setMenuCards] = useState(null);
    const onlineStatus = useOnlineStatus();
    const BestSellerCard = BestSeller(Card);
    const {loggedIn,setUserName} = useContext(UserContext);
    // const data = createContext("Hello");
    
    // console.log(restuarantCards);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() => {
        const data = await fetch(RES_URL);
        const json = await data.json();
        // console.log(json);
        const newData = json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
        const imgData = json?.data.cards[1];
        setMenuCards(imgData);
        setRestuarantCards(newData);
        setFilterItem(newData);
        setTopUp(newData);
    }
    
    
    if(onlineStatus === false){
        return <h1>Error!Something Might Wrong.Check your internet Connection.</h1>
    }
    if (!filterItem){
        return <Shimmer / > ;
    }
    const menuCard = menuCards?.card?.card?.imageGridCards?.info;
    const {title} = menuCards?.card?.card?.header;
  const handleChange = (e)=>{
      setSearchText(e.target.value);
    }
  {/* console.log(searchText); */}
   
     const handleClick =()=>{
        const newArr = [];
        restuarantCards.map((item)=>{
        const {name} = item.info;
        if(name.toLowerCase().includes(searchText.toLowerCase())){
            newArr.push(item);
        }
    })
    // console.log(newArr)
    // console.log(newArr);
    setFilterItem(newArr);
    };
   const handleTopUp = ()=>{
    const newArray =[];
    topUp.map((item)=>{
        if(item.info.avgRatingString >= 4){
            newArray.push(item);
        }
    })
    setFilterItem(newArray);
   }


    return ( 
    <>
        <div className = "w-3/5 h-full mx-auto pt-10 pb-10 mt-20" >
            <div className="w-5/5 h-full mx-auto p-2 mb-2">
                <h1 className="text-gray-800 text-2xl font-sans font-bold mb-5">{title}
                </h1>
                    <div className="w-full h-48 p-2 flex flex-wrap flex-col overflow-x-scroll hustle">
                        {
                        menuCard.map(item=><ScrollBarMenu key={item.id}  imageId = {item.imageId} />)
                        }
                    </div>
            </div> 
            <hr/>
            <br/>
            <div className="flex justify-between items-center mb-5">
                <p className="text-gray-800 text-3xl font-sans font-bold">WELCOME50</p>
                <p className=" w-5/12 h-10"><input type="text" className="w-full  h-full border border-black text-sm font-bold" 
                value={loggedIn} onChange={(e)=>{setUserName(e.target.value)}} /></p>
                <button className="bg-black text-white px-3 py-2 rounded-lg" onClick={handleTopUp}>TOP RATED RESTUARANTS</button>   
            </div>
            <hr />
            <div className="w-full h-10 flex justify-center p-1 mt-2">
               <input data-testid="input" className="w-6/12 rounded-md indent-2 border border-black mr-2" type="text" placeholder="Filter items....." value={searchText} onChange={handleChange}  />
               <button className="bg-black text-white rounded-lg px-5 py-1" onClick={handleClick}>Filter</button>
            </div>
            <div className="w-full flex flex-wrap justify-between items-center"> {
                filterItem.map((restuarant) => <Link className ="w-2/6 transition linear delay-100 hover:scale-90 mb-2 font-sans cursor-pointer "
                key = { restuarant.info.id }
                to = { "/restuarants/" + restuarant.info.id }>  
                {/*If the restuarant rating is greater than 4.2 then bestSeller label is being attached to the restuarant card.*/ }
                {restuarant.info.avgRating > 4.2 ?(
                <BestSellerCard resData={restuarant}/>
                ):
                (
                <Card resData={restuarant}/>
                )}
                </Link >)
                } 
            </div>  
        </div> 
    </>
    )
}

export default BodyLayout;