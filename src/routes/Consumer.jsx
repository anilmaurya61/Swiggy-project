import React from 'react'
import {Route, Routes } from 'react-router-dom';
import ConsumerHome from '../pages/consumer/Home';
import LandingPage from '../pages/consumer/LandingPage'
import SearchPage from '../pages/consumer/SearchPage';
import RestaurantPage from '../pages/consumer/RestaurantPage';
import { UserProvider } from '../context/userContext';


const Consumer = () => {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/auth" element={<LandingPage />} />
          <Route path="/" element={<ConsumerHome />} />
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/menu" element={<RestaurantPage/>}/>
        </Routes>
      </UserProvider>
    </>
  )
}

export default Consumer
