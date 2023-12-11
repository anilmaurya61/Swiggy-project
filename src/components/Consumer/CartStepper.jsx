import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom';



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
    margin-bottom: 32px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
`;

const Online = styled.div`
    display: flex;
    align-items: center; 
	align-content: center;
	gap:1rem;
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
const steps = [
	{
		label: 'Login',
	},
	{
		label: 'Add Delivery Address',
	},
	{
		label: 'Payment',
	},
];

export default function VerticalLinearStepper({ openDrawer }) {
	const [activeStep, setActiveStep] = useState(0);
	const { Width, Height } = useWindowSize()

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
													<OnlinePredictionIcon />
												</Online>
												<Info>Anil Maurya | anilmaurya0004@gmail.com</Info>
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
												<Box sx={{ width: '3rem' }}><HomeIcon /></Box>
												<Box>
													<h2>Home</h2>
													<p>32, My Sugar Building 3rd Floor J C Street B-2, opposite to Ravindra Kalakshethra, Kumbarpet, Dodpete, Nagarathpete, ...</p>
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
				<Paper square elevation={0} sx={{ p: 3 }}>
					<Typography>Thank you for Your Order</Typography>
					<Link to='/'>
					<Button variant='outlined'>
						Back to Home
					</Button>
					</Link>
					<Confetti
						width={Width}
						height={Height}
					/>
				</Paper>
			)}
		</Box>
	);
}
