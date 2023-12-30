import React from "react";
import { useSearchCuis } from "../utlities/Custom_hooks/useSearchCuis";
import { CAROUSEL_URL } from "../utlities/constants.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useFetchData } from "../utlities/Custom_hooks/useFetchData";
import { Link } from "react-router-dom";
const Search = () => {
  const [display, setDisplay] = useState(true);
  const [filteredItem, setFilteredItem] = useState([]);
  const data = useFetchData();
  useSearchCuis();
  const filterItems =
    data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants &&
    data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;

  function getFilterElements(e) {
    const data = filterItems.filter((item) =>
      item.info.name.includes(e.charAt(0).toUpperCase() + e.slice(1))
        ? item
        : null
    );
    setFilteredItem(data);
  }
  const items = useSelector(
    (store) =>
      store?.cards?.popularCuisines?.data?.cards[1]?.card?.card?.imageGridCards
        ?.info
  );
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full py-32 flex justify-center">
          <div className="w-6/12 h-full">
            <div className="w-full h-11 border border-slate-300 rounded-md flex items-center">
              <input
                className="w-full h-full indent-3 rounded-md text-slate-700  outline-none placeholder:text-slate-500 font-semibold"
                type="text"
                name="Text"
                placeholder="Search for restuarants and foods"
                onInput={(e) =>
                  e.target.value === ""
                    ? setDisplay(true)
                    : getFilterElements(e.target.value) ?? setDisplay(false)
                }
              />
              {display ? (
                <span className="material-symbols-outlined mr-2 text-slate-700 font-semibold cursor-pointer">
                  search
                </span>
              ) : (
                <span className="material-symbols-outlined mr-2 text-slate-700 font-semibold cursor-pointer">
                  close
                </span>
              )}
            </div>
            {display && (
              <div className="w-full h-60 py-6 px-5">
                <h1 className="text-xl text-slate-800 font-extrabold">
                  Popular Cuisines
                </h1>
                <div className="w-full h-40 mt-4 overflow-x-scroll flex flex-wrap flex-col hustle">
                  {items &&
                    items.map((item) => (
                      <Link key={item.imageId} className="w-2/12 h-full mr-1">
                        <img
                          className="w-full h-full"
                          src={CAROUSEL_URL + item.imageId}
                          alt="Random"
                        />
                      </Link>
                    ))}
                </div>
              </div>
            )}
            {!display && (
              <div className="w-full h-full mt-3 cursor-pointer">
                {filteredItem.map((item) => (
                  <Link
                    className="w-full h-[70px]  transition ease-in rounded-md  hover:bg-slate-200  flex justify-between items-center"
                    to={"/restuarants/" + item.info.id}
                    key={item.info.id}
                  >
                    <img
                      className="w-14 h-14 rounded-md"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        item.info.cloudinaryImageId
                      }
                      alt="Random"
                    />
                    <div className="w-10/12 h-14 mr-12 text-slate-700 font-sans">
                      <h1 className="text-xl font-semibold">
                        {item.info.name}
                      </h1>
                      <p className="text-sm">{item.info.cuisines.join(",")}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
