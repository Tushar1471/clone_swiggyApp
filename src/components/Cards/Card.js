const Card = ({ resData }) => {
  const {
    name,
    avgRatingString,
    cloudinaryImageId,
    cuisines,
    areaName,
    sla,
    aggregatedDiscountInfoV3,
  } = resData.info;
  // console.log(resData);
  return (
    <>
      <div data-testid="custom-element" className=" p-2 ml-1 text-slate-800">
        <div className="w-full h-52 mx-auto mt-2 ">
          <img
            className="w-full h-full rounded-md shadow-lg opacity-95 "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="Image"
          />
          <div className="w-full h-full relative -top-10 ">
            <p className="w-full h-10 absolute bg-gradient-to-t from-black text-white text-xl font-bold">
              &nbsp;&nbsp;
              {aggregatedDiscountInfoV3?.header &&
              aggregatedDiscountInfoV3?.subHeader
                ? aggregatedDiscountInfoV3?.header +
                  " " +
                  aggregatedDiscountInfoV3?.subHeader
                : null}
            </p>
          </div>
        </div>
        <div className=" mt-0.5 ml-1">
          <div className=" w-full whitespace-nowrap overflow-hidden text-ellipsis">
            <p className="font-bold">{name}</p>
          </div>
          <div className=" flex justify-start text-sm">
            <p className="mr-2 font-bold ">
              <span className="fa fa-star checked text-white bg-green-600 p-[2px]  rounded-[100vh]"></span>
              &nbsp;&nbsp;{avgRatingString}
            </p>
            <p className="font-bold">
              <span>{sla.slaString}</span>
            </p>
          </div>
          <div className="mt-1">{cuisines.slice(0, 2).join(",")}</div>
          <div className="mt-1 text-sm underline text-gray-500">{areaName}</div>
        </div>
      </div>
    </>
  );
};

// Higher Order Component

// CREATION OF HIGH ORDER COMPONENT WHICH TAKES ANOTHER COMPONENT AS INPUT AND RETURNS SEEMS TO BE THE ENHANCED VERSION OF THE COMPONENT.
export const BestSeller = (Card) => {
  return (props) => {
    return (
      <>
        <div>
          <label className=" absolute p-1 ml-3 mt-4 bg-slate-900 rounded-l-md rounded-r-[50vh] opacity-80 shadow-2xl text-indigo-100 z-20 font-sans">
            BestSeller
          </label>
          <Card {...props} />
        </div>
      </>
    );
  };
};
export default Card;
