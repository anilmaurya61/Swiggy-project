import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tabs from '../../components/Restaurant/Tabs';
import Header from '../../components/Restaurant/Header';
import { getCurrentUser } from '../../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { useGetMenuItemQuery } from '../../firebase/firebaseRTKquery'
import { addItems } from '../../feature/restaurant/RestaurantHomeSlice'

const RestaurantHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: menuItem, error, isLoading } = useGetMenuItemQuery('lpwxy39r');
  useEffect(() => {
    if (!isLoading && !error && menuItem) {
      dispatch(addItems(menuItem?.items));
    }
  }, [menuItem]);

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
