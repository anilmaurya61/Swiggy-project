import React from 'react';
import styled from 'styled-components';
import img from '../../assets/img.jpeg';
import logo from '../../assets/logo.png';

const Container = styled.div`
  position: sticky;
  top: -340px;
  z-index: 100;
  background-image: url(${img});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  background-color: #000000;
  height: 100vh;

  & > div {
    margin-left: 8%;
    margin-right: 8%;
    padding-top: 3%;
    margin-bottom: 3%;
  }
`;

const Logo = styled.img`
  height: 9vh;
  margin-bottom: 4.5vh;
  vertical-align: middle;
  border-style: none;
`;
const LogoText=styled.div`
   margin-top:14vh;
`

const HelpText = styled.span`
  color: white;
  float: right;
  font-size: 20px;
`;

const Title = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 54px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 74px;
  margin-bottom: 10px;
`;

const Subtitle = styled.span`
  color: white;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 33px;
`;

const StyledDivider = styled.div`
  background-color: #ffffff;
  margin-top: 41px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom: 1px solid #979797;
`;

const Button = styled.button`
  background-color: #f68621;
  border: none;
  border-radius: 4px;
  margin-top:40px;
  height: 45px;
  width: 230px;
  color: white;
  font-size: 20px;
  line-height: 24px;
  font-family: 'Open Sans';
  letter-spacing: 1.5px;
`;

function RestaurantRegister() {
  return (
    <>
      <Container>
        <div>
          <LogoText>
            <Logo src={logo} />
            <HelpText>Need Help? Contact Us: 080-45664746</HelpText>
          </LogoText>
          <Title>Partner with Swiggy</Title>
          <Subtitle>Get listed on India's leading online food delivery marketplace today</Subtitle>
          <StyledDivider />
          <Button>Register</Button>
        </div>
      </Container>

      
    </>
  );
}

export default RestaurantRegister;
