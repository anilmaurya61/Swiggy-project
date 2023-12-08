import React, { useState } from 'react';
import styled from 'styled-components';
import OrdersComponent from './OrdersComponent';
import MenuItem from './MenuItem';
import RestaurantDetailsComponent from './RestaurantDetailsComponent';

const TabsContainer = styled.div`
  width: 80%;
  margin: 2rem 10%;
  box-sizing: border-box;
`;

const TabButton = styled.button`
  padding: 10px 15px;
  margin: 10px;
  background-color: transparent;
  color: ${(props) => (props.active ? 'grey' : '#000')};
  border: none;
  border-bottom: ${(props) => (props.active ? '2px solid grey' : '2px solid transparent')};
  cursor: pointer;
  outline: none;
  font-size: 2rem;
  font-weight: 800; 
  transition: border-bottom 0.3s;

  &:hover {
    border-bottom: ${(props) => (props.active ? '2px solid #1565c0' : '2px solid #f0f0f0')};
  }
`;


const MenuItems = () => {
  const menuData = {
    "restaurantId": "26342374623",
    "itemId": "137618736483",
    "itemName": "Fruit Treat Sundae",
    "description": "Want Some Excitement? Then This Is Perfect For You, Scoops Of Strawberry, Vanilla & Pista Ice Cream Served With Fresh Cut Fruits From Apple, Pineapple & Sweet Lime, Lychees, Peaches, Topped With Whipped Cream And Natural Mango Sauce, Strawberry Sauce And A Little Surprise!",
    "price": 199,
    "itemImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/udqvo1tklzbymfdrvf3h",
    "isVegetarian": true,
  };
  return (
    <>
      <MenuItem {...menuData} />
      <MenuItem {...menuData} />
      <MenuItem {...menuData} />
      <MenuItem {...menuData} />
    </>
  )
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const menuData = {
    "restaurantId": "26342374623",
    "itemId": "137618736483",
    "itemName": "Fruit Treat Sundae",
    "description": "Want Some Excitement? Then This Is Perfect For You, Scoops Of Strawberry, Vanilla & Pista Ice Cream Served With Fresh Cut Fruits From Apple, Pineapple & Sweet Lime, Lychees, Peaches, Topped With Whipped Cream And Natural Mango Sauce, Strawberry Sauce And A Little Surprise!",
    "price": 199,
    "itemImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/udqvo1tklzbymfdrvf3h",
    "isVegetarian": true,
  };

  return (
    <TabsContainer>
      <TabButton active={activeTab === 'orders'} onClick={() => handleTabClick('orders')}>
        Orders
      </TabButton>
      <TabButton active={activeTab === 'menu'} onClick={() => handleTabClick('menu')}>
        Menu Items
      </TabButton>
      <TabButton active={activeTab === 'details'} onClick={() => handleTabClick('details')}>
        Restaurant Details
      </TabButton>

      {activeTab === 'orders' && <OrdersComponent />}
      {activeTab === 'menu' && <MenuItems />}
      {activeTab === 'details' && <RestaurantDetailsComponent />}
    </TabsContainer>
  );
};

export default Tabs;