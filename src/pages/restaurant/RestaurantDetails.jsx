import React, { useRef, useState } from "react";
import styled from "styled-components";
import img from "../../assets/img.jpeg";
import logo from "../../assets/logo.png";
import TextField from "@mui/material/TextField";
import UploadButton from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LoadingButton from "@mui/lab/LoadingButton";

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
  margin-bottom: 4rem;
  margin-right: 12vw;
  width: 24vw;
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
  cursor: pointer;
`;

// ... (previous code)

function RestaurantDetails() {
  const fileInputRef = useRef(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [city, setCity] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cityError, setCityError] = useState("");
  const [restaurantNameError, setRestaurantNameError] = useState("");
  const [restaurantLocationError, setRestaurantLocationError] = useState("");
  const [cuisineError, setCuisineError] = useState("");
  const [imageError, setImageError] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = () => {
    const files = fileInputRef.current.files;

    if (files.length > 0) {
      setIsUploaded(true);
      setImageError("");
    } else {
      setIsUploaded(false);
      setImageError("Image is required");
    }
  };

  const handleRegisterClick = () => {
    // Validate the form fields
    if (!city.trim()) {
      setCityError("City is required");
    } else {
      setCityError("");
    }

    if (!restaurantName.trim()) {
      setRestaurantNameError("Restaurant Name is required");
    } else {
      setRestaurantNameError("");
    }

    if (!restaurantLocation.trim()) {
      setRestaurantLocationError("Restaurant Location is required");
    } else {
      setRestaurantLocationError("");
    }
    
    if (!cuisine.trim()) {
      setCuisineError("Cuisine is required");
    } else {
      setCuisineError("");
    }

    // Validate the image upload
    if (!isUploaded) {
      setImageError("Image is required");
    }

    // Proceed with registration if all fields are filled
    if (city && restaurantName && restaurantLocation && isUploaded) {
      // Handle registration logic here
      console.log("Registration successful!");
    }
  };

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
            <TextField
              style={{ display: "block", marginTop: "10px", width: "25vw" }}
              id="outlined-required"
              InputProps={{ style: { width: "24vw" } }}
              onChange={(e) => setCity(e.target.value)}
              error={!!cityError}
              helperText={cityError}
            />
          </InputContainer>

          <InputContainer>
            <span>Restaurant Name</span>
            <span style={{ marginLeft: "5px", color: "rgb(224, 32, 32)" }}>
              *
            </span>
            <TextField
              style={{ display: "block", marginTop: "10px", width: "25vw" }}
              id="outlined-required"
              InputProps={{ style: { width: "25vw" } }}
              onChange={(e) => setRestaurantName(e.target.value)}
              error={!!restaurantNameError}
              helperText={restaurantNameError}
            />
          </InputContainer>

          <InputContainer>
            <span>Restaurant Location</span>
            <span style={{ marginLeft: "5px", color: "rgb(224, 32, 32)" }}>
              *
            </span>
            <TextField
              style={{ display: "block", marginTop: "10px" }}
              InputProps={{ style: { width: "24vw" } }}
              id="outlined-required"
              onChange={(e) => setRestaurantLocation(e.target.value)}
              error={!!restaurantLocationError}
              helperText={restaurantLocationError}
            />
          </InputContainer>

          <InputContainer>
            <span>Add Cuisine Separated by comma</span>
            <span style={{ marginLeft: "5px", color: "rgb(224, 32, 32)" }}>
              *
            </span>
            <TextField
              style={{ display: "block", marginTop: "10px" }}
              InputProps={{ style: { width: "24vw" } }}
              id="outlined-required"
              onChange={(e) => setCuisine(e.target.value)}
              error={!!cuisineError}
              helperText={cuisineError}
            />
          </InputContainer>

          <InputContainer>
            <div style={{ display: "block" }}>
              <span>Upload Cover Image for Restaurant</span>
              <span style={{ marginLeft: "5px", color: "rgb(224, 32, 32)" }}>
                *
              </span>
            </div>
            <UploadButton
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              style={{
                marginTop: "10px",
                backgroundColor: isUploaded ? "#f68621" : null,
              }}
              onClick={handleClick}
            >
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              {isUploaded ? "Uploaded" : "Upload file"}
            </UploadButton>
            {imageError && (
              <div style={{ color: "rgb(224, 32, 32)", marginTop: "5px" }}>
                {imageError}
              </div>
            )}
          </InputContainer>
        </FlexInput>
        <LoadingButton
          loading={false}
          loadingPosition="start"
          variant="outlined"
          onClick={handleRegisterClick}
          style={{
            backgroundColor: "#f68621",
            border: "none",
            borderRadius: "4px",
            height: "45px",
            width: "230px",
            color: "white",
            fontSize: "20px",
            lineHeight: "24px",
            fontFamily: "Open Sans",
            letterSpacing: "1px",
          }}
        >
          Register
        </LoadingButton>
      </FormContainer>
    </>
  );
}

export default RestaurantDetails;
