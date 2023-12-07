import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import data from '../../data.json';

const Container = styled.div`
  margin-top: 5rem;
  padding: 0 5rem 0 5rem;
`;

const RestaurantContainer = styled.div`
  margin-top: 5rem;
  padding: 0 5rem 0 5rem;
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
  flex-wrap: wrap;
  gap: 1.3rem;
`;

const Body = () => {
  const [Restaurant, setRestaurant] = useState([]);
  const [filteredCard, setFilteredCard] = useState([]);
  const [SearchText, setSearchText] = useState('');

  function searchCard() {
    const lowercaseSearchText = SearchText.toLowerCase();
    setFilteredCard(Restaurant.filter((card) => card?.info?.name.toLowerCase().includes(lowercaseSearchText)));
  }

  useEffect(() => {
    setRestaurant(data);
    setFilteredCard(data);
  }, []);

  return (
    <Container>
      <RestaurantContainer>
        <h1>Restaurants with online food delivery in Bangalore</h1>
        <SearchContainer>
          <input
            type="text"
            placeholder="Search here ..."
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              searchCard(e.target.value);
            }}
          />
        </SearchContainer>

        <Button
          onClick={() => {
            setFilteredCard(Restaurant.sort((a, b) => {
              const deliveryTimeA = a?.info?.sla?.deliveryTime || 0;
              const deliveryTimeB = b?.info?.sla?.deliveryTime || 0;
              return deliveryTimeA - deliveryTimeB;
            }));
          }}
        >
          Fast Delivery
        </Button>

        <Button
          onClick={() => {
            setFilteredCard(Restaurant.filter((card) => card.info.avgRating > 4.0));
          }}
        >
          Rating 4.0+
        </Button>

        <Button>Pure Veg</Button>
        <Button>Rs. 300-Rs. 600</Button>
        <Button>Less than Rs. 300</Button>

        <FoodCardsContainer>
          {filteredCard.map((hotel) => (
            <Card
              key={hotel.info.id}
              image={hotel.info.cloudinaryImageId}
              cuisines={hotel?.info?.cuisines?.join(',') || ''}
              name={hotel.info.name}
              avgRating={hotel.info.avgRating}
              deliveryTime={hotel?.info?.sla?.slaString || '10 mins'}
            />
          ))}
        </FoodCardsContainer>
      </RestaurantContainer>
    </Container>
  );
};

export default Body;
