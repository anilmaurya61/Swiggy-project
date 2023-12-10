import React, { useState } from 'react';
import styled from 'styled-components';


const StyledNav = styled.nav`
  background-color: #fff;
  box-shadow: 0 0 10px 0 black;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;
  height: 5rem;
  padding: 0 5rem;
`;

const StyledLogo = styled.div`
  img {
    height: 3rem;
  }
`;

const CartHeader = ({ prop }) => {

    return (
        <StyledNav>
            <StyledContainer>
                <StyledLogo>
                    <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt="" />
                </StyledLogo>
                <span style={{ fontWeight: '700', color: '#3d4152', textTransform: 'uppercase'}}>SECURE CHECKOUT</span>
            </StyledContainer>
        </StyledNav>
    );
};

export default CartHeader;
