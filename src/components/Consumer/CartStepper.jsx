import React, { useEffect, useState } from 'react';
import { Box, Stepper, Step, StepLabel, StepContent, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import {
	OnlinePrediction as OnlinePredictionIcon,
	Home as HomeIcon,
    WorkOutline as WorkIcon,
    LocationOnOutlined as OtherIcon, 
	CheckCircleRounded as CheckCircleRoundedIcon
} from '@mui/icons-material';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom';
import confirmOrder from '../../assets/orderConfirmed.gif'
import { useUser } from '../../context/authContext';
import { useGetAddressesQuery } from '../../firebase/getAddressRTKquery'

const StyledLoginContainer = styled(Box)`
  height: 10rem;
  margin-left: 25px;
    background: #fff;
    margin-bottom: 20px;
    padding: 35px 40px 39px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const StyledLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin: 0; 
  }
`;

const StyledGreenText = styled.h1`
 	font-size: 1.3rem;
    font-weight: 600;
    color: #282c3f;
`;

const Online = styled.div`
    display: flex;
    align-items: center; 
	gap:1rem;
	margin-bottom: 30px;
`

const Info = styled.p`
    font-weight: 500;
    margin-top: 6px;
    line-height: 1.12;
    font-size: 18px;
    color: #282c3f;
`

const AddAddress = styled.div`
	width: 25rem;
	border: 1px solid grey;
	margin:1rem;
	padding: 1rem;
`
const popupStyle = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: 'white',
	padding: '20px',
	borderRadius: '8px',
	boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
};

const steps = [{ label: 'Login' }, { label: 'Add Delivery Address' }, { label: 'Payment' }];

export default function VerticalLinearStepper({ openDrawer }) {
	const [activeStep, setActiveStep] = useState(0);
	const [addressData, setaddressData] = useState([]);
	const { Width, Height } = useWindowSize()
	const user = useUser();
	const { data, error, isLoading } = useGetAddressesQuery(user?.uid);
	console.log(isLoading, data?.addresses[data?.addresses.length - 1])
	useEffect(() => {
		if (!isLoading) {
			setaddressData(data?.addresses[0])
		}
	}, [data])
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Box sx={{ marginTop: '5rem', Width: '50%', marginLeft: '10rem', backgroundColor: '#fff' }}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel
							optional={
								index === 2 ? (
									<Typography variant="caption"></Typography>
								) : null
							}
						>
							{step.label}
						</StepLabel>
						<StepContent>
							<Typography>{step.description}</Typography>
							<Box sx={{ mb: 2 }}>
								<div>
									{index === 0 && (
										<StyledLoginContainer>
											<StyledLoginContent>
												<Online>
													<StyledGreenText>LoggedIn</StyledGreenText>
													<CheckCircleRoundedIcon style={{color:'green'}}/>
												</Online>
												<Info>{user?.displayName} | {user?.email}</Info>
											</StyledLoginContent>
											<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r" alt="" />
										</StyledLoginContainer>
									)}

									{index === 1 && (
										<AddAddress>
											<StyledLoginContent>
												<Online>
													<StyledGreenText>Add Delivery address</StyledGreenText>
												</Online>
											</StyledLoginContent>
											<Box sx={{ display: 'flex', alignItems: 'baseline', gap: '2rem' }}>

												{addressData?.addressType == 'home' && <Box sx={{ width: '3rem' }}><HomeIcon /></Box>}
												{addressData?.addressType == 'work' && <Box sx={{ width: '3rem' }}><WorkIcon /></Box>}
												{addressData?.addressType == 'other' && <Box sx={{ width: '3rem' }}><OtherIcon /></Box>}
												<Box>
												{addressData?.addressType == 'home' && <Box sx={{ width: '3rem' }}><h2>Home</h2></Box>}
												{addressData?.addressType == 'work' && <Box sx={{ width: '3rem' }}><h2>Work</h2></Box>}
												{addressData?.addressType == 'other' && <Box sx={{ width: '3rem' }}><h2>Other</h2></Box>}
												
													<p>{addressData?.doorFlatNo + ', ' + addressData?.address + ', ' + addressData?.landmark}</p>
													<Button onClick={openDrawer('right', true)} variant='outlined' color="success">ADD NEW</Button>
												</Box>

											</Box>
										</AddAddress>
									)}
									<Button
										variant="outlined"
										onClick={handleNext}
										sx={{ mt: 1, mr: 1, backgroundColor: '#fcb040', color: '#fff' }}
									>
										{index === steps.length - 1 ? 'Order Now' : 'Continue'}
									</Button>
									<Button
										disabled={index === 0}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1 }}
									>
										Back
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<>
					<Box sx={popupStyle}>
						<img src={confirmOrder} alt="" />
						<Link to='/'>
							<Button variant='outlined'>
								Back to Home
							</Button>
						</Link>
					</Box>
					<Confetti
						width={Width}
						height={Height}
					/>
				</>
			)}
		</Box>
	);
}
