import React from "react";
import { useSearchCuis } from "../utlities/Custom_hooks/useSearchCuis";
import { CAROUSEL_URL } from "../utlities/constants.js";
import { useSelector } from "react-redux";
import { useState } from "react";
const Search = () => {
  const [display, setDisplay] = useState(true);
  useSearchCuis();
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
                  e.target.value === "" ? setDisplay(true) : setDisplay(false)
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
                      <div
                        key={item.id}
                        className="w-2/12 h-full bg-slate-500 mr-1"
                      >
                        <img
                          className="w-full h-full"
                          src={CAROUSEL_URL + item.imageId}
                          alt="Random"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
            {!display && (
              <div className="w-full h-full mt-1">
                <div className="w-full h-16 border-b-2 transition ease-in  hover:bg-slate-300"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
