import React, { useState } from 'react';
import styled from 'styled-components';
import veg from '../../assets/veg-icon.png';
import { Box, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';



const MenuItemWrapper = styled.div`
  border-top: 1px solid #ccc;
  padding: 1rem;
  height: 10rem;
  transition: transform 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
    box-sizing: border-box;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
  text-align: left;
  padding-right: 16px; 
`;

const RightColumn = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const ItemImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;

const ItemName = styled.h3`
  margin-top: 8px;
`;

const Price = styled.p`
  margin-top: 8px;
  font-weight: bold;
`;

const VegetarianLabel = styled.img`
  margin-top: 8px;
  width: 15px;
  height: auto;
  filter: ${(props) => (props.isVegetarian ? 'none' : 'hue-rotate(120deg)')};
`;

const AddButton = styled.button`
  background-color: #fff;
  color: #45a049;
  margin: -1rem 0 0 0;
  padding: 0.5rem 1.5rem;
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; 
    color: #fff;
  }

  &:active {
    background-color: #39843e; 
    color: #fff;
  }
`;

const ReviewCart = ({ restaurantId, itemId, itemName, price, description, itemImage, isVegetarian }) => {

    const dispatch = useDispatch();


    return (
        <>
            <MenuItemWrapper style={{width:'40vw'}}>
                <LeftColumn>
                    <VegetarianLabel isVegetarian={!isVegetarian} src={veg} alt="Vegetarian" />
                    <ItemName>{itemName}</ItemName>
                    <Price>₹{price}</Price>
                </LeftColumn>
                <RightColumn>
                    <ItemImage src={itemImage} alt={itemName} />
                    <AddButton>Remove</AddButton>
                </RightColumn>
            </MenuItemWrapper>
        </>
    );
};

export default ReviewCart;
