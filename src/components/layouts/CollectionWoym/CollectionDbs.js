import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useCollDb } from "../../utlities/Custom_hooks/CollectionDb/useCollDb";
import Shimmer from "../ShimmerColl.js/Shimmer";
import { Link } from "react-router-dom";
import useRestuarantMenu from "../../utlities/Custom_hooks/useRestuarantMenu";
const CollectionDbs = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("collection_id");
  const category = queryParams.get("tags");
  const resId = queryParams.get("resId");
  // const suppData = useRestuarantMenu(resId);
  const newData = useCollDb(q, category);
  if (newData === null) return <Shimmer />;
  const { data } = newData;
  const collData = data.cards.filter((item) =>
    item.card.card["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      ? item
      : null
  );
  // console.log(suppData);
  return (
    <>
      <div className="w-[90%] h-screen mx-auto pt-6 pb-5 mt-24 font-sans">
        {data &&
          data.cards.map((item, index) => (
            <div key={index} className="text-slate-950 ml-4 mb-10">
              <h1 className="text-4xl font-bold">{item?.card?.card?.title}</h1>
              <p className="mt-4">{item?.card?.card?.description}</p>
            </div>
          ))}
        <h1 className="text-xl font-bold ml-4">Restuarants to explore</h1>
        <div className="w-full flex flex-wrap justify-between items-center">
          {collData &&
            collData.map((data) => (
              <Link
                to={
                  "/collections/" +
                  data.card.card.info.id +
                  "/2vn?restaurant_id=" +
                  data.card.card.info.id
                }
                className="w-3/12 transition linear delay-100 hover:scale-90 mb-2 font-sans cursor-pointer "
                key={data.card.card.info.id}
              >
                <div
                  data-testid="custom-element"
                  className=" p-2 ml-1 text-slate-800"
                >
                  <div className="w-full h-52 mx-auto mt-2 ">
                    <img
                      className="w-full h-full rounded-md shadow-lg opacity-95 "
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        data?.card?.card?.info?.cloudinaryImageId
                      }
                      alt="Image"
                    />
                    <div className="w-full h-full relative -top-10 ">
                      <p className="w-full h-10 absolute bg-gradient-to-t from-black text-white text-xl font-bold">
                        &nbsp;&nbsp;
                        {data?.card?.card?.info?.aggregatedDiscountInfoV3
                          ?.header &&
                        data?.card?.card?.info?.aggregatedDiscountInfoV3
                          ?.subHeader
                          ? data?.card?.card?.info?.aggregatedDiscountInfoV3
                              ?.header +
                            " " +
                            data?.card?.card?.info?.aggregatedDiscountInfoV3
                              ?.subHeader
                          : null}
                      </p>
                    </div>
                  </div>
                  <div className=" mt-0.5 ml-1">
                    <div className=" w-full whitespace-nowrap overflow-hidden text-ellipsis">
                      <p className="font-bold">
                        {data?.card?.card?.info?.name}
                      </p>
                    </div>
                    <div className=" flex justify-start text-sm">
                      <p className="mr-2 font-bold ">
                        <span className="fa fa-star checked text-white bg-green-600 p-[2px]  rounded-[100vh]"></span>
                        &nbsp;&nbsp;
                        {data?.card?.card?.info?.avgRatingString ||
                          data?.card?.card?.info?.avgRating}
                      </p>
                      <p className="font-bold">
                        <span>{data?.card?.card?.info?.sla.slaString}</span>
                      </p>
                    </div>
                    <div className="mt-1">
                      {data?.card?.card?.info?.cuisines.slice(0, 2).join(",")}
                    </div>
                    <div className="mt-1 text-sm underline text-gray-500">
                      {data?.card?.card?.info?.areaName}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default CollectionDbs;
