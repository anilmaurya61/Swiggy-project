import React from 'react';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 20rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
  overflow-wrap: break-word;
  curser:pointer;

  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.7);
  }

  &:active {
    box-shadow: inset 10px 10px 20px rgba(2, 0, 0, 0.7);
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 15rem;
  border-radius: 1.5rem;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.h1`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const RatingTime = styled.div`
  display: flex;
  align-items: center;
`;

const Card = (params) => {
  return (
    <>
      <StyledCard className="card-container">
        <ImgContainer className="img-container">
          <Img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${params.image}`} alt="" />
        </ImgContainer>
        <CardTitle>{params.name}</CardTitle>
        <RatingTime>
          {<StarPurple500Icon sx={{ color: 'green' }} />} {params.avgRating} - {params.deliveryTime}
        </RatingTime>
        <p>{params.cuisines}</p>
      </StyledCard>
    </>
  );
};

export default Card;
