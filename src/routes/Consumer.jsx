import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsumerHome from '../pages/consumer/Home';

const Consumer = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<ConsumerHome />} />
        </Routes>
    </>
  )
}

export default Consumer
