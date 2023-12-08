import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RestaurantHome from '../pages/restaurent/RestaurentHome';
import RestaurantDetails from '../pages/restaurent/RegisterDetails';
import RestaurantRegister from '../pages/restaurent/RestrauntRegister';

const Restaurant = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RestaurantHome />} />
        <Route path="/details" element={<RestaurantDetails />} />
        <Route path="/register" element={<RestaurantRegister/>}/>
      </Routes>
    </>
  );
}

export default Restaurant;
