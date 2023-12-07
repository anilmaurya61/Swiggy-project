import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RestaurantHome from '../pages/restaurent/RestaurentHome';
import Footer from '../components/Consumer/Footer';

const Restaurant = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RestaurantHome />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default Restaurant;
