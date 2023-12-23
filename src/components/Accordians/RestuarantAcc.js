// import  {useContext}  from "react";
import MenuList from "../ItemLists/MenuList";

const RestuarantAcc = ({ data, itemCards, showIndex, setShowIndex, index }) => {
  const handleToggle = () => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <div className="w-7/12 border-t-[2px] mx-auto"></div>
      <div
        className="w-7/12  z-20 px-3 py-3 mx-auto flex justify-between cursor-pointer "
        onClick={handleToggle}
      >
        <span className="text-black text-lg font-bold">
          {data.title}({itemCards.length})
        </span>
        {showIndex === index ? (
          <span className="material-symbols-outlined">keyboard_arrow_up</span>
        ) : (
          <span className="material-symbols-outlined">expand_more</span>
        )}
      </div>
      <div className="w-full h-full relative -top-4">
        {showIndex === index && (
          <MenuList key={data.type} itemCards={itemCards} />
        )}
      </div>
      <div className="w-7/12 border-b-[8px] mx-auto"></div>
    </>
  );
};

export default RestuarantAcc;

// {itemCards.map(items=><li key={items.card.info.id} className="list-none text-black text-lg">{items.card.info.name} - &#8377;{items.card.info.finalPrice / 100 || items.card.info.price / 100 || items.card.info.defaultPrice / 100}</li>)}
