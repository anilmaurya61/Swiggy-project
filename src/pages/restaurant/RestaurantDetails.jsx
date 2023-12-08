import React from "react";
import styled from "styled-components";
import img from "../../assets/img.jpeg";
import logo from "../../assets/logo.png";

const Container = styled.div`
  font-family: "Open Sans";
  position: sticky;
  top: -340px;
  z-index: 100;
  background-image: url(${img});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  background-color: #000000;
  height: 478px;

  & > div {
    margin-left: 8%;
    margin-right: 8%;
    padding-top: 3%;
    margin-bottom: 3%;
  }
`;

const Logo = styled.img`
  height: 9.57562568008705vh;
  margin-bottom: 4.5vh;
  vertical-align: middle;
  border-style: none;
`;

const HelpText = styled.span`
  color: white;
  float: right;
  font-size: 20px;
  padding-top: 10px;
`;

const Title = styled.p`
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 54px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 74px;
  margin-bottom: 10px;
`;

const Subtitle = styled.span`
  color: white;
  font-family: "Open Sans";
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

const FormContainer = styled.div`
  margin: 0 7%;
  padding: 6% 6%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 7px 7px 2px rgba(0, 0, 0, 0.2);
  padding-top: 9.9vh;
`;

const FlexInput = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InputContainer = styled.div`
  width: 25vw;
  margin-bottom: 4rem;
  margin-right: 8rem;
`;

const Input = styled.input`
  font-family: "Open Sans";
  font-size: 1.25rem;
  height: 40px;
  width: 100%;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #f68621;
  border: none;
  border-radius: 4px;
  height: 45px;
  width: 230px;
  color: white;
  font-size: 20px;
  line-height: 24px;
  font-family: "Open Sans";
  letter-spacing: 1.5px;
`;

function RestaurantDetails() {
  return (
    <>
      <Container>
        <div>
          <div>
            <Logo src={logo} />
            <HelpText>Need Help? Contact Us: 080-45664746</HelpText>
          </div>
          <Title>Partner with Swiggy</Title>
          <Subtitle>
            Get listed on India's leading online food delivery marketplace today
          </Subtitle>
          <StyledDivider />
        </div>
      </Container>

      <FormContainer>
        <h1
          style={{
            fontWeight: "600",
            fontSize: "26px",
            marginBottom: "1.5rem",
            color: "rgba(0, 0, 0, 0.85)",
          }}
        >
          Restaurant Details
        </h1>
        <FlexInput>
          <InputContainer>
            <span>City</span>
            <span style={{ marginLeft: "5px", color: "rgb(224, 32, 32)" }}>
              *
            </span>
            <Input />
          </InputContainer>

          <InputContainer>
            <span>Restaurant Name</span>
            <span style={{ marginLeft: "5px", color: "rgb(224, 32, 32)" }}>
              *
            </span>
            <Input />
          </InputContainer>

          <InputContainer>
            <span>Enter Owner Name</span>
            <span style={{ marginLeft: "5px", color: "rgb(224, 32, 32)" }}>
              *
            </span>
            <Input />
          </InputContainer>

          <InputContainer>
            <span>Please share your WhatsApp number here</span>
            <span style={{ marginLeft: "5px", color: "rgb(224, 32, 32)" }}>
              *
            </span>
            <Input />
          </InputContainer>
        </FlexInput>
        <Button>Proceed</Button>
      </FormContainer>
    </>
  );
}

export default RestaurantDetails;
