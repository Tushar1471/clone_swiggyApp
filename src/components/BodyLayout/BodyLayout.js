import Card, { BestSeller } from "../Cards/Card";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import ScrollBarMenu from "../BodyCompon2/ScrollBarMenu";
import { useFetchData } from "../utlities/Custom_hooks/useFetchData";
import { useSelector } from "react-redux";
import { CAROUSEL_URL } from "../utlities/constants";

const BodyLayout = () => {
  const BestSellerCard = BestSeller(Card);
  useFetchData();
  const data = useSelector((item) => item?.cards?.nowGetData?.cards);
  if (!data) return <Shimmer />;
  const newData = data[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const newDb = data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const imgData = data[0]?.card?.card;
  const bannerData = data[2]?.card?.card?.imageGridCards?.info;
  const menuCard = imgData?.imageGridCards?.info;
  const header = imgData?.header?.title;

  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="w-4/5 h-full mx-auto pt-10 pb-10 mt-16">
          {bannerData && (
            <div className="w-full h-full mx-auto p-2 mb-2">
              <h1 className=" text-2xl font-sans font-bold mb-5">
                Best offers for you
              </h1>
              <div className="w-full h-64 flex flex-wrap overflow-x-scroll hustle">
                {bannerData &&
                  bannerData.map((item) => (
                    <div
                      key={item.id}
                      className="w-2/5 h-full mr-2 cursor-pointer"
                    >
                      <img
                        className="w-full h-full"
                        src={CAROUSEL_URL + item.imageId}
                        alt="Banner"
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
          <div className="w-full h-full mx-auto p-2 mb-2">
            <h1 className="text-gray-800 text-2xl font-sans font-bold mb-5">
              {imgData && header}
            </h1>
            <div className="w-full h-48 p-2 flex flex-wrap flex-col overflow-x-scroll overflow-y-hidden hustle">
              {menuCard &&
                menuCard.map((item) => (
                  <Link
                    key={item.id}
                    to={`/collections/${item.action.link
                      .split("/")
                      .slice(length - 1)}&resId=${item.id}`}
                  >
                    <ScrollBarMenu imageId={item.imageId} />
                  </Link>
                ))}
            </div>
          </div>
          <hr />
          <br />
          <h1 className="text-gray-800 text-2xl font-sans font-bold mb-5">
            Top Restuarants Chains in Delhi
          </h1>
          <div className="w-full flex flex-wrap justify-between items-center">
            {newData &&
              newData.map((restuarant) => (
                <Link
                  className="w-3/12 transition linear delay-100 hover:scale-90 mb-2 font-sans cursor-pointer "
                  key={restuarant.info.id}
                  to={"/restuarants/" + restuarant.info.id}
                >
                  {/*If the restuarant rating is greater than 4.2 then bestSeller label is being attached to the restuarant card.*/}
                  {restuarant.info.avgRating > 4.2 ? (
                    <BestSellerCard resData={restuarant} />
                  ) : (
                    <Card resData={restuarant} />
                  )}
                </Link>
              ))}
          </div>
          <hr />
          <br />
          <h1 className="text-gray-800 text-2xl font-sans font-bold mb-5">
            Restaurants with online food delivery in Delhi
          </h1>
          <div className="w-full flex flex-wrap justify-between items-center">
            {newDb &&
              newDb.map((restuarant) => (
                <Link
                  className="w-3/12 transition linear delay-100 hover:scale-90 mb-2 font-sans cursor-pointer "
                  key={restuarant.info.id}
                  to={"/restuarants/" + restuarant.info.id}
                >
                  {/*If the restuarant rating is greater than 4.2 then bestSeller label is being attached to the restuarant card.*/}
                  {restuarant.info.avgRating > 4.2 ? (
                    <BestSellerCard resData={restuarant} />
                  ) : (
                    <Card resData={restuarant} />
                  )}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyLayout;
