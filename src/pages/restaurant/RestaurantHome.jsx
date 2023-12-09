import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tabs from '../../components/Restaurant/Tabs';
import Header from '../../components/Restaurant/Header';
import { getCurrentUser } from '../../firebase/firebaseConfig';
import { useUser } from '../../context/authContext';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
const RestaurantHome = () => {
  const navigate = useNavigate();
  const user=useUser();
  const firestore = getFirestore();
  useEffect(() => {
    const checkRestaurantExistence = async () => {
      if (user) {
        const uid = user.uid;
        const restaurantCollection = collection(firestore, 'restaurants');
  
        try {
          const querySnapshot = await getDocs(restaurantCollection);
          const restaurantExists = querySnapshot.docs.some(docSnapshot => {
            const data = docSnapshot.data();
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
