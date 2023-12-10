import React, { useState } from 'react';
import styled from 'styled-components';
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

const Search = Styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.10),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = Styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = Styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledBadge = Styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const HeaderComponent = () => {
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
            <StyledIconTextContainer>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </StyledIconTextContainer>
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
