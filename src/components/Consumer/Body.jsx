import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import data from '../../data.json';
import { useNavigate } from 'react-router-dom';
import { useGetAllRestaurantsQuery} from '../../firebase/firebaseRTKqueryRestaurants'
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 3rem auto;
  padding: 0 3rem 0 3rem;
`;

const RestaurantContainer = styled.div`
  box-sizing: border-box;
  margin:0 auto;
  padding: 0 3rem 0 3rem;
`;

const SearchContainer = styled.span`
  input {
    height: 3rem;
    width: 20rem;
    border: 2px solid grey;
    border-radius: 20px;
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  border: 1px solid grey;
  border-radius: 20px;
  padding: 10px;
  background-color: #fff;
  margin: 2rem 1rem 0 1rem;
  font-size: 1.5rem;
  color: grey;

  &:active {
    box-shadow: inset 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
  }
`;

const FoodCardsContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1.3rem;
`;

const Body = () => {
  const { data: restaurants, error, isLoading } = useGetAllRestaurantsQuery();
  return (
    <Container>
      <RestaurantContainer>
      <h1>Restaurants with online food delivery in Bangalore</h1>
        <FoodCardsContainer>
          {restaurants&&restaurants.map((hotel) => (
            <Card
              key={hotel?.restaurant_id}
              image={hotel?.image_url}
              cuisines={hotel?.cuisine}
              location={hotel?.restaurantLocation}
              name={hotel?.restaurantName}
              avgRating={4.4}
              deliveryTime={hotel?.info?.sla?.slaString || '10 mins'}
              id={hotel?.restaurant_id}
            />
          ))}
        </FoodCardsContainer>
      </RestaurantContainer>
    </Container>
  );
};

export default Body;
