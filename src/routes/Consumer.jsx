import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsumerHome from '../pages/consumer/Home';
import LandingPage from '../pages/consumer/LandingPage'
import { UserProvider } from '../context/userContext';

const Consumer = () => {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/auth" element={<LandingPage />} />
          <Route path="/" element={<ConsumerHome />} />
        </Routes>
      </UserProvider>
    </>
  )
}

export default Consumer
