import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RestaurantHome from '../pages/restaurant/RestaurentHome';
import RestaurantDetails from '../pages/restaurant/RegisterDetails';
import RestaurantRegister from '../pages/restaurant/RestrauntRegister';

const Restaurant = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RestaurantHome />} />
        <Route path="/register" element={<RestaurantRegister/>} />
        <Route path="details" element={<RegisterDetails/>}/>
      </Routes>
    </>
  );
}

export default Restaurant;
