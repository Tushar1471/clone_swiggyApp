import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utlities/Custom_hooks/useRestuarantMenu";
import RestuarantAcc from "../Accordians/RestuarantAcc";

const RestaurantsMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resMenuData = useRestuarantMenu(resId);
  // console.log(resMenuData);
  if (!resMenuData) return <h2>Loading</h2>;

  const resMenuFirst = resMenuData.cards[0].card.card;
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
  } = resMenuFirst?.info;
  const menuCards =
    resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  const categories = menuCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <>
      <div className=" mt-28">
        <div className="w-7/12 h-24 mx-auto flex justify-between p-3">
          <div className="w-8/12 h-full flex flex-col justify-between">
            <p className="text-slate-900 text-2xl font-bold ">{name}</p>
            <p className="text-sm">{cuisines.join(",")}</p>
            <p className="text-sm">{areaName}</p>
          </div>
          <div className="w-2/12 h-full flex justify-center items-center">
            <div className="w-7/12 h-full shadow-md border p-1 rounded-md">
              <div className="w-full h-1/2 border-b-2 flex justify-center items-center">
                <span className="fa fa-star checked text-green-800 p-1 ">
                  &nbsp;{avgRating}
                </span>
              </div>
              <div className="w-full h-1/2 text-xs flex justify-center items-center">
                <p>{totalRatingsString}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {categories.map((c, index) => (
            // Lifting State up
            // controlled component
            <RestuarantAcc
              key={c?.card?.card?.title}
              data={c?.card?.card}
              index={index}
              itemCards={c?.card?.card?.itemCards}
              showIndex={showIndex}
              setShowIndex={setShowIndex}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-10 fixed bottom-12 flex justify-center">
        <button className="px-3 py-2 bg-indigo-600 text-sm font-semibold text-white flex rounded-[100vh]">
          <span className="material-symbols-outlined text-sm">restaurant</span>
          <span>BROWSER MENU</span>
        </button>
      </div>
    </>
  );
};

export default RestaurantsMenu;
