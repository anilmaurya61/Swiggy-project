import React,{useState} from 'react';
import Header from "../../components/Consumer/Header";
import RestaurantMenu from "../../components/Consumer/RestaurantMenu";
import MenuItem from "../../components/Restaurant/MenuItem";

import { useGetMenuItemQuery } from '../../firebase/firebaseRTKquery'
import { getFirestore} from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
function RestaurantPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id= params.get("id");
  const { data: menuItem, error, isLoading } = useGetMenuItemQuery(id);
  
  const items=menuItem?.items;
  console.log(items);
  return (
    <>
      <Header />
      <RestaurantMenu />
      {items && items?.map((item, index) => (
        <MenuItem {...item} addBtn={true} key={index} />
      ))}
    </>
  );
}
export default RestaurantPage;
