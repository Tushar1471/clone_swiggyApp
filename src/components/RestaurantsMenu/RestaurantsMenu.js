import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utlities/Custom_hooks/useRestuarantMenu";
import RestuarantAcc from "../Accordians/RestuarantAcc";
import ResMenuShimmer from "../layouts/ResMenuShimmer/ResMenuShimmer";

const RestaurantsMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const [display, setDisplay] = useState(false);
  // const [handleIndex,setHandleIndex] = useState()
  const { resId } = useParams();
  const resMenuData = useRestuarantMenu(resId);

  if (!resMenuData) return <ResMenuShimmer />;

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
      <div className="mt-24">
        {display && (
          <div>
            <div
              className="w-full h-screen bg-black fixed top-0 bottom-0 left-0 right-0 opacity-60 cursor-pointer z-30"
              onClick={() => setDisplay(false)}
            ></div>
            <div className="w-4/12 h-60 shadow-xl bg-white fixed bottom-12 left-0 right-0 z-50 mx-auto rounded-md overflow-y-scroll cursor-pointer">
              {categories.map((item) => (
                <div
                  key={item?.card?.card?.title}
                  className="px-4 py-1 text-lg text-slate-950"
                >
                  <button
                    onClick={(e) =>
                      categories.filter((item, index) =>
                        item?.card?.card?.title === e.target.textContent
                          ? setShowIndex(index) ?? setDisplay(false)
                          : null
                      )
                    }
                    className=" w-full flex justify-between items-center p-2 "
                  >
                    <span>{item?.card?.card?.title}</span>
                    <span>{item?.card?.card?.itemCards.length}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
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
        <div className="mt-5  ">
          {categories.map((c, index) => (
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
        <button
          className="px-3 py-2 bg-sky-400 text-sm font-semibold text-white flex rounded-[100vh] shadow-lg"
          onClick={() => setDisplay(true)}
        >
          <span className="material-symbols-outlined text-sm">restaurant</span>
          <span>BROWSER MENU</span>
        </button>
      </div>
    </>
  );
};

export default RestaurantsMenu;
