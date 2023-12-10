import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { styled as Styled, alpha } from '@mui/material/styles';
import { useUser } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { Button, Avatar, InputBase, IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon
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
  gap: 1rem;
`;

const StyledLogo = styled.div`
  img {
    height: 3rem;
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
const Search=styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderComponent = ({prop}) => {

const StyledBadge = Styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

  const { user, Login, Logout } = useUser();
  const navigate = useNavigate();

  function handleLogout() {
    Logout();
    navigate('/')
  }

  return (
    <StyledNav>
      <StyledContainer className="container">
        <StyledLogo className="logo">
          <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt="" />
        </StyledLogo>
        <StyledUl>
          <li>
           <Link to="/search" style={{color:"inherit",textDecoration:"none"}}>
           <Search><SearchIcon style={{marginRight:"4px"}}/> Search</Search> 
            </Link> 
          </li>
          <li>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </li>
          <li>
            {user && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt="Travis Howard" src={user.photoURL} />
                <StyledSpan>{user.displayName}</StyledSpan>
              </div>
            )}
          </li>
          <li>
            <Button variant='outlined' onClick={handleLogout}>Logout</Button>
          </li>
        </StyledUl>
      </StyledContainer>
    </StyledNav>
  );
};

export default HeaderComponent;
