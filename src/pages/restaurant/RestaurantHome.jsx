import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '../../components/Restaurant/Tabs';
import Header from '../../components/Restaurant/Header';
import { getCurrentUser } from '../../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { useGetMenuItemQuery } from '../../firebase/firebaseRTKquery'
import { addItems } from '../../feature/restaurant/RestaurantHomeSlice'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useUser } from '../../context/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RestaurantHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user=useUser();
  const { data: menuItem, error, isLoading } = useGetMenuItemQuery(user?.uid);
  const firestore = getFirestore();
  const [restaurantData, setRestaurantData] = useState();

  useEffect(() => {
    const checkRestaurantExistence = async () => {
      if (user) {
        const uid = user?.uid;
        const restaurantCollection = collection(firestore, 'restaurants');
  
        try {
          const querySnapshot = await getDocs(restaurantCollection);
          const restaurantExists = querySnapshot.docs.some(docSnapshot => {
            const data = docSnapshot.data();
            setRestaurantData(data);
            console.log(data);
            return Object.values(data).some(value => value === uid);
          });
  
          if(!restaurantExists){
            navigate('/restaurant/details');
          }
        } catch (error) {
          console.error('Error checking restaurant existence:', error);
        }
      }
    };
    checkRestaurantExistence();
  }, [user, firestore,navigate]);

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
      <Header Image = {restaurantData?.image_url} title={restaurantData?.restaurantName} subtitle={restaurantData?.restaurantLocation}/>
      <Tabs restaurantData= {restaurantData}/>
    </>
  );
};

export default RestaurantHome;
