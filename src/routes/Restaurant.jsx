import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RestaurantHome from '../pages/restaurent/RestaurantHome';
import RestaurantRegister from '../pages/restaurent/RestraurantRegister';
import RegisterDetails from '../pages/restaurent/RegisterDetails'

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
