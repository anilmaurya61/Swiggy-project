import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Search as SearchIcon,
  LocalOfferOutlined as OfferIcon,
  HelpOutlineOutlined as HelpIcon,
  PersonOutlineOutlined as PersonIcon,
  AddShoppingCartOutlined as CartIcon,
} from '@mui/icons-material';

const StyledNav = styled.nav`
  background-color: #fff;
  box-shadow: 0 0 10px 0 black;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0 5rem;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 60%;
`;

const StyledLogo = styled.div`
  img {
    height: 4rem;
  }
`;

const StyledIconTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  margin-left: 8px;
  cursor: pointer;
`;

const HeaderComponent = () => {
  const [Auth, setAuth] = useState('Login');

  function authentication() {
    setAuth(Auth === 'Login' ? 'Logout' : 'Login');
  }

  return (
    <StyledNav>
      <StyledContainer className="container">
        <StyledLogo className="logo">
          <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt="" />
        </StyledLogo>
        <StyledUl>
          <li>
            <StyledIconTextContainer>
              <SearchIcon />
              <StyledSpan>Search</StyledSpan>
            </StyledIconTextContainer>
          </li>
          <li>
            <StyledIconTextContainer>
              <OfferIcon />
              <StyledSpan>Offer</StyledSpan>
            </StyledIconTextContainer>
          </li>
          <li>
            <StyledIconTextContainer>
              <HelpIcon />
              <StyledSpan>Help</StyledSpan>
            </StyledIconTextContainer>
          </li>
          <li>
            <StyledIconTextContainer>
              <PersonIcon />
              <StyledSpan onClick={authentication}>{Auth}</StyledSpan>
            </StyledIconTextContainer>
          </li>
          <li>
            <StyledIconTextContainer>
              <CartIcon />
              <StyledSpan>Cart</StyledSpan>
            </StyledIconTextContainer>
          </li>
        </StyledUl>
      </StyledContainer>
    </StyledNav>
  );
};

export default HeaderComponent;
