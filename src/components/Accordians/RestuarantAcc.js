// import  {useContext}  from "react";
import MenuList from "../ItemLists/MenuList";

const RestuarantAcc = ({data,itemCards,showIndex,setShowIndex,index})=>{
  const handleToggle = () => {
  //   console.log("Clicked Index:", index);
  // console.log("Current showIndex:", showIndex);
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return(
    <>
   <div className="w-8/12 bg-slate-50 z-20 p-3 mx-auto flex justify-between cursor-pointer shadow-lg" onClick={handleToggle}>
   <span className="text-black text-xl font-bold">{data.title}({itemCards.length})</span>
   <span> <i className={`fa ${showIndex === index ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
        </span>
   </div>
   {showIndex === index  && <MenuList key={data.type}itemCards={itemCards}/>}
   <br/>
   {/* <Accordion/> */}
   </>
  )
}

export default RestuarantAcc;




// {itemCards.map(items=><li key={items.card.info.id} className="list-none text-black text-lg">{items.card.info.name} - &#8377;{items.card.info.finalPrice / 100 || items.card.info.price / 100 || items.card.info.defaultPrice / 100}</li>)}