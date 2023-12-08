import React from 'react';
import { Button } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material'
import {signOutUser} from '../../firebase/firebaseConfig'
import { Navigate, useNavigate } from 'react-router-dom';

const RestaurantDetailsComponent = () => {

  const navigate = useNavigate();

  const handleSignout = async() =>{
    await signOutUser();
    navigate('/restaurant/register');
  }
  return (
    <>
      <div>
        <h2>Restaurant Details </h2>
      </div>
      <Button onClick={handleSignout} variant="outlined" endIcon={<LogoutIcon />}>
        SignOut
      </Button>
    </>
  );
};

export default RestaurantDetailsComponent;
