// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import OverLay from "../OverLay";

const Header = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((store) => store.cart.items);
  return (
    <>
      <div className=" w-full h-20 flex justify-center items-center fixed top-0 bg-white z-30 shadow-md font-sans">
        <div className=" w-full flex justify-around items-center p-2 text-sm">
          <div className="w-4/12 flex justify-evenly items-center">
            <div className="w-8">
              <Link to="/">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
                  alt="Logo Image"
                />
              </Link>
            </div>
            <div className="flex">
              <div>
                <a href="#">
                  <p className="mr-6 underline">Rohini</p>
                </a>
              </div>
              <div>
                <select
                  name="location"
                  id="location"
                  className=" cursor-pointer outline-none"
                >
                  <option defaultValue="roh">D-1/10A Budh Vihar Phase-1</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-6/12 h-8">
            <nav className="flex justify-between items-center list-none h-full">
              <Link
                to="/search"
                className="hover:text-orange-500 transition ease-in-out delay-50"
              >
                <li className="flex items-center">
                  <span className="material-symbols-outlined mr-1.5 ">
                    search
                  </span>
                  Search
                </li>
              </Link>
              <Link
                to="/offers"
                className="hover:text-orange-500 transition ease-in-out delay-50"
              >
                <li className="flex items-center">
                  <span className="material-symbols-outlined mr-1.5">
                    percent
                  </span>
                  Offers<sup className="text-orange-400 font-bold">NEW</sup>
                </li>
              </Link>
              <Link
                to="/help"
                className="hover:text-orange-500 transition ease-in-out delay-50"
              >
                <li className="flex items-center">
                  <span className="material-symbols-outlined mr-1.5">help</span>
                  Help
                </li>
              </Link>
              <Link
                to="/cart"
                className="hover:text-orange-500 transition ease-in-out delay-50"
              >
                <li className="flex items-center">
                  <span className="material-symbols-outlined mr-1.5">
                    shopping_cart
                  </span>
                  Cart
                  <sup data-testid="len" className="font-bold text-sm">
                    {cart.length > 0 && cart.length}
                  </sup>
                </li>
              </Link>
              <p
                className="hover:text-orange-500 transition ease-in-out delay-50 cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <li className="flex items-center">
                  <span className="material-symbols-outlined mr-1.5">
                    account_circle
                  </span>
                  Sign Up
                </li>
              </p>
              <Link
                to="/grocery"
                className="hover:text-orange-500 transition ease-in-out delay-50"
              >
                <li className="flex items-center">
                  <span className="material-symbols-outlined mr-1.5">
                    storefront
                  </span>
                  Grocery
                </li>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <OverLay open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
