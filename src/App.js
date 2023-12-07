import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsumerHome from './pages/consumer/Home';
import RestaurantHome from './pages/restaurent/RestaurentHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ConsumerHome />} />
          <Route path="/restaurantHome" element={<RestaurantHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
