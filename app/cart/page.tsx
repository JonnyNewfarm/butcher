import React from "react";
import Container from "../components/Container";
import ProductCartClient from "../components/cart/ProductCartClient";

const Cart = () => {
  return (
    <div className="pt-10">
      <Container>
        <ProductCartClient />
      </Container>
    </div>
  );
};

export default Cart;
