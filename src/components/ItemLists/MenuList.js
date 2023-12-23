import { useDispatch } from "react-redux";
import { IMG_URL } from "../utlities/constants";
import { addItems } from "../utlities/CartSlice/cartSlice";

const MenuList = ({ itemCards }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItems(item));
  };
  console.log(itemCards);
  return (
    <>
      <div className="w-7/12 mx-auto h-full">
        {itemCards.map((item) => (
          <div key={item.card.info.id}>
            <div
              className="w-full h-full mb-2 flex justify-center items-center mt-4"
              data-testid="foodItems"
            >
              <div className="w-full p-2 flex  items-center">
                <div className="w-full text-left p-1">
                  <p className="w-5 h-5">
                    <img
                      src={
                        item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                          ? "https://logodix.com/logo/2088733.png"
                          : "https://www.pinclipart.com/picdir/big/419-4194820_veg-icon-png-non-veg-logo-png-clipart.png"
                      }
                      className="w-full h-full"
                      alt="Veg"
                    />
                  </p>
                  <p className="font-semibold">{item.card.info.name}</p>
                  <p>
                    &#8377;
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>
                  <p className="text-justify text-sm">
                    {item.card.info.description}
                  </p>
                </div>
              </div>
              <div className="w-3/5 h-full  flex justify-end p-2 relative ">
                <div className="w-2/4 h-full p-2 flex justify-center items-start">
                  <div
                    className="px-7 py-1  absolute bottom-0 rounded-md bg-white shadow-md z-10"
                    onClick={() => handleClick(item)}
                  >
                    <button className="w-full h-full">Add</button>
                  </div>
                  <div className="w-full h-[90px] ">
                    <img
                      className="w-full h-full"
                      src={
                        item?.card?.info?.imageId === undefined
                          ? "https://st4.depositphotos.com/7819052/21803/v/450/depositphotos_218033152-stock-illustration-grunge-red-available-word-rubber.jpg"
                          : IMG_URL + item?.card?.info?.imageId
                      }
                      alt="Not Available"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuList;

// https://logodix.com/logo/2088733.png
// https://www.iamgoingvegan.com/wp-content/uploads/2020/05/Indian-Vegetarian-Mark-1-1024x1024.jpg
//https://www.pinclipart.com/picdir/big/419-4194820_veg-icon-png-non-veg-logo-png-clipart.png
