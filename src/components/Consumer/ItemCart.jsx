import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Cart = styled.button`
  height: 48px;
  background: #60b246;
  color: #fff;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  contain: content;
  pointer-events: auto;
  width: 60%;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: left;
  position: sticky;
  bottom: 0;
  left: 20%;
  padding: 14px 30px;
`;
const Span1 = styled.div`
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  display: block;
`;
const Span2 = styled.div``;
const Span3 = styled.div`
  font-weight: 600;
  font-size: 1rem;
  display: block;
`;
function ItemCart() {
  const cart = useSelector((state) => state.cart);
  let totalCount=0;
  if(cart!=undefined)
    totalCount = cart.items.reduce((sum, item) => sum + item.count, 0);
  return (
    <>
      {cart?.items?.length > 0 ? (
        <Cart>
          <Span1>{totalCount} item added</Span1>
          <Span1>View Cart</Span1>
        </Cart>
      ) : (
        <></>
      )}
    </>
  );
}
export default ItemCart;
