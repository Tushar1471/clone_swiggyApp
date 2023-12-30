import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems, removeItems } from "../utlities/CartSlice/cartSlice";
import EmptyCart from "../EmptyCart/EmptyCart";
import { IMG_URL } from "../utlities/constants.js";
const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.cart.items);
  const [CalculatePrice, setCalculatePrice] = useState(data);
  const itemPrices = CalculatePrice.map(
    (item) => item?.card?.info?.price || item?.card?.info?.defaultPrice
  );
  const cartTotal = itemPrices.reduce((total, price) => total + price / 100, 0);
  const gstAmount = 0.18;
  const addGst = Math.round(cartTotal * gstAmount);
  const totalAmount = cartTotal + addGst;

  const handleClear = () => {
    dispatch(clearItems());
    setCalculatePrice([]);
  };
  const handlePopUp = () => {
    dispatch(removeItems());
  };

  if (data.length == 0) {
    return <EmptyCart />;
  }
  return (
    <>
      <div className="w-full h-screen bg-gray-200">
        <div className="w-11/12 h-screen mx-auto flex justify-evenly items-center ">
          <div className="w-8/12 h-[80%] mt-24 flex flex-col justify-between p-2 text-slate-500">
            <div className="w-full h-[40%] flex justify-between  p-6 border bg-white ">
              <div className="w-8/12 h-full flex flex-col justify-between">
                <div className="w-full h-[50%]">
                  <h1 className="text-3xl text-black font-semibold">Account</h1>
                  <p className="text-lg text-justify">
                    To place your order now,log in to your existing account or
                    sign up.
                  </p>
                </div>
                <div className="w-full h-[40%]  flex">
                  <div className="w-5/12 h-full border border-green-500 mr-4 text-green-500">
                    <button className="w-full h-full text-lg">
                      Have an account?
                      <br />
                      <span className="font-bold">LOG IN</span>
                    </button>
                  </div>
                  <div className="w-5/12 h-full border border-green-400 bg-green-500 mr-4 text-white">
                    <button className="w-full h-full text-lg">
                      New to Swiggy?
                      <br />
                      <span className="font-bold">SIGN UP</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-3/12 h-full flex justify-center items-center">
                <div className="w-5/6 h-full">
                  <img
                    className="w-full h-full"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                    alt="Random"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-[20%] p-7 border bg-white">
              <h1 className="text-3xl">Delievery Address</h1>
            </div>
            <div className="w-full h-[20%] p-7 border bg-white">
              <h1 className="text-3xl">Payment</h1>
            </div>
          </div>

          <div className="w-3/12 h-[80%]  shadow-2xl mt-24 flex flex-col justify-between bg-white ">
            <div className="w-full h-[50%] mt-2 p-2 overflow-y-scroll hustle cursor-pointer">
              {data.map((item) => (
                <div key={item?.card?.info?.name}>
                  <div className="w-full h-10 mb-4 p-1 flex items-center justify-between">
                    <p className="w-6 h-6">
                      <img
                        className="w-full h-full"
                        src={
                          item?.card?.info?.itemAttribute?.vegClassifier ===
                          "VEG"
                            ? "https://th.bing.com/th?id=OIP.-byiMZuz3d9Hf0huAqIkvwHaHa&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
                            : "https://th.bing.com/th?id=OIP.w6vZA1LU2oGl4vbu1Q2BxQHaH0&w=243&h=256&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
                        }
                        alt="lOGOS"
                      />
                    </p>
                    <p className=" w-6/12 ml-2 text-md  px-2 text-justify py-2">
                      {item?.card?.info?.name.split(" ").slice(0, 2).join(" ")}
                    </p>
                    <p className="text-lg">
                      &#8377;
                      {Math.round(item?.card?.info?.price / 100) ||
                        Math.round(item?.card?.info?.defaultPrice / 100)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="w-full mb-6 px-3">
                <div className="w-full h-10 flex justify-between items-center">
                  <h1 className="font-bold text-xl font-serif">
                    Bill Details:
                  </h1>
                </div>
                <hr />
                <div className="w-full h-10 flex justify-between items-center mb-2">
                  <p>Item Total</p>
                  <p>&#8377;{cartTotal.toFixed(0)}</p>
                </div>
                <div className="w-full h-10 flex justify-between items-center mb-2">
                  <p>GST & Service Tax(18%)</p>
                  <p>&#8377;{addGst}</p>
                </div>
                <hr />
                <div className="w-full h-10 mb-1 flex justify-between items-center font-bold">
                  <p>TO PAY</p>
                  <p>&#8377;{totalAmount.toFixed(0)}</p>
                </div>
              </div>
              <div className="w-full flex justify-around mb-4">
                <button
                  className="bg-black text-white p-2 rounded-lg"
                  onClick={() => handleClear()}
                >
                  Clear Cart
                </button>
                <button
                  className="bg-black text-white p-2 rounded-lg"
                  onClick={() => handlePopUp()}
                >
                  Remove Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
