// import React from 'react'
import {useState,useEffect} from "react";
import { MENU_URL } from '../constants';
const useRestuarantMenu = (resId) => {
const [resMenuData,setResMenuData] = useState(null);
useEffect(()=>{
  menuData();
},[]);
const menuData = async()=>{
  const menuRes = await fetch(MENU_URL + resId);
  const json = await menuRes.json();
  // console.log(json);
  setResMenuData(json?.data);
};
return resMenuData;
}

export default useRestuarantMenu;


