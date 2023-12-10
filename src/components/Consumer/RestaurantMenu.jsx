import styled from "styled-components";
import { Search as SearchIcon } from "@mui/icons-material";
import StarIcon from '@mui/icons-material/Star';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import Checkbox from '@mui/material/Checkbox';
const Container1 = styled.div`
  max-width: 800px;
  min-height: 800px;
  margin: 20px auto 0;
`;
const WrapperTop = styled.div`
  height: 52px;
  background-color: #fff;
  color: #3d4152;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 6;
  overflow: hidden;
  contain: strict;
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  padding-right: 4px;
`;
const Top1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
  color: inherit;
  text-decoration: none;
`;
const Span = styled.span`
  margin: 0 5px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
const Heading = styled.p`
  font-size: 1.43rem;
  font-weight: 600;
  color: #282c3f;
  margin-bottom: 8px;
  text-transform: capitalize;
`;
const LightText = styled.p`
  font-size: 0.93rem;
  color: #7e808c;
  height: calc(0.93rem + 2px);
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  white-space: nowrap;
`;
const RatingWrapper = styled.div`
  border: 1px solid #e9e9eb;
  box-shadow: 0 1px 5px #f9f9f9;
  border-radius: 6px;
  text-align: center;
  margin-top: 10px;
  padding:0px 5px;
  max-width: 100px;
  float: right;
`;
const Rating = styled.div`
  color: #3d9b6d;
  padding:10px;
  border-bottom: 1px solid #e9e9eb;
  font-weight: 700;
  margin-bottom: 8px;
  display: block;
  display:flex;
  justify-content:center;
  align-items: center;
`;
const RatingText = styled.p`
  font-size: 11px;
  color: #8b8d97;
  font-family: ProximaNovaCondensedRegular, arial, Helvetica Neue, sans-serif;
  font-weight: 600;
`;
const BikeContainer=styled.div`
    display:flex;
    margin-top: 2px;
    gap:8px;
    align-items: center;
`
const VegContainer=styled.div`
    margin-top: 5px;
`
const RestaurantMenu = () => {


  return (
    <div>
      <Container1>
        <WrapperTop>
          <Top1>
            <div>
              <Span>Home</Span>
              <span>/</span>
              <Span>Kannur Food Point</Span>
            </div>
            <div>
              <SearchIcon />
            </div>
          </Top1>
        </WrapperTop>
        <FlexDiv>
          <div>
            <Heading>Kannur Food Point</Heading>
            <LightText>Kerala, Chinese</LightText>
            <LightText>Koramangla, 1km</LightText>
          </div>

          <RatingWrapper>
            <Rating>
            <StarIcon style={{height:"19px"}}/>
              3.3
            </Rating>
            <RatingText>10k+ ratings</RatingText>
          </RatingWrapper>
        </FlexDiv>
        <BikeContainer>
        <DirectionsBikeIcon style={{color:"#8b8d97",marginTop:"3px"}}/>
        <LightText>2.2km | 32rs delivery charge</LightText>
        </BikeContainer>
        <hr style={{color:"lightgray",borderStyle:"dashed"}}></hr>
        <VegContainer>
         <span>Veg Only</span>
        <Checkbox defaultChecked color="success"/>
        </VegContainer>
      </Container1>
    </div>
  );
};

export default RestaurantMenu;
