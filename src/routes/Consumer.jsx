import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsumerHome from '../pages/consumer/Home';
import LandingPage from '../pages/consumer/LandingPage'

const Consumer = () => {
  return (
    <>
        <Routes>
          <Route path="/auth" element={<LandingPage />} />
          <Route path="/" element={<ConsumerHome />} />
        </Routes>
    </>
  )
}

export default Consumer
