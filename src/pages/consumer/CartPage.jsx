import React, { useState } from 'react'
import Cart from '../../components/Consumer/CartHeader'
import EmptyCart from '../../components/Consumer/EmptyCart'
import CartStepper from '../../components/Consumer/CartStepper'
import { Box } from '@mui/material'
import AddAddress from '../../components/Consumer/AddAddress'
import ReviewCart from '../../components/Consumer/ReviewCart'

const CartPage = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const dummyData = [
    {
      restaurantId: 1,
      itemId: 101,
      itemName: 'Vegetarian Pizza',
      price: 250,
      description: 'Delicious pizza with assorted vegetables',
      itemImage: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/7798d7bed74c81bc0e5ffc677a7d2eef',
      isVegetarian: true,
    },
    {
      restaurantId: 1,
      itemId: 102,
      itemName: 'Chicken Pasta',
      price: 300,
      description: 'Savory pasta with grilled chicken and Alfredo sauce',
      itemImage: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/7798d7bed74c81bc0e5ffc677a7d2eef',
      isVegetarian: false,
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#edfbff', height: '100vh', width:'100%' }}>
      <Cart />
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '2rem' }}>
        <CartStepper openDrawer={toggleDrawer} />
        <Box sx={{marginTop:'1rem', backgroundColor:'#fff'}}>
          {dummyData.map((item) => (
            <ReviewCart key={item.itemId} {...item} />
          ))}
          <Box sx={{padding:'0.5rem 1rem', borderTop:'2px solid black', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h2>PAY</h2> <h2>₹ 275</h2>
          </Box>
        </Box>
      </Box>

      {/* <EmptyCart/> */}
      <AddAddress
        anchor="right"
        isOpen={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      />
    </Box>

  )
}

export default CartPage
