import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tabs from '../../components/Restaurant/Tabs';
import Header from '../../components/Restaurant/Header';
import { getCurrentUser } from '../../firebase/firebaseConfig';

const RestaurantHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const user = await getCurrentUser();

      if (!user) {
        navigate('/restaurant/register');
      } else {
        navigate('/restaurant');
      }
    };

    checkAuthentication();
  }, []);

  return (
    <>
      <Header />
      <Tabs />
      <ToastContainer />
    </>
  );
};

export default RestaurantHome;
