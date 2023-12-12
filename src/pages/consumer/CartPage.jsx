import React, { useEffect, useState } from "react";
import Cart from "../../components/Consumer/CartHeader";
import EmptyCart from "../../components/Consumer/EmptyCart";
import CartStepper from "../../components/Consumer/CartStepper";
import { Box } from "@mui/material";
import AddAddress from "../../components/Consumer/AddAddress";
import ReviewCart from "../../components/Consumer/ReviewCart";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [cartEmpty, setCartEmpty] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    if (cart.items.length == 0) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  }, [cart]);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  let totalSum = 0;
  if (cart.items != undefined)
    totalSum = cart.items.reduce((sum, item) => {
      return sum + item.count * item.price;
    }, 0);

  return (
    <Box sx={{ backgroundColor: "#edfbff", height: "100vh", width: "100%" }}>
      <Cart />
      {!cartEmpty && (
        <Box sx={{ display: "flex", alignItems: "baseline", gap: "2rem" }}>
          <CartStepper openDrawer={toggleDrawer} />
          <Box sx={{ marginTop: "1rem", backgroundColor: "#fff" }}>
            {cart &&
              cart.items.map((item) => (
                <ReviewCart key={item.itemId} {...item} />
              ))}
            <Box
              sx={{
                padding: "0.5rem 1rem",
                borderTop: "2px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>PAY</h2> <h2>₹ {totalSum}</h2>
            </Box>
          </Box>
        </Box>
      )}

      {cartEmpty && <EmptyCart />}

      <AddAddress
        anchor="right"
        isOpen={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      />
    </Box>
  );
};

export default CartPage;
