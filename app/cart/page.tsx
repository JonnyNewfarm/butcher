import React from "react";
import Container from "../components/Container";
import ProductCartClient from "../components/cart/ProductCartClient";
import { getLoggedInUser } from "@/actions/getLoggedInUser";

const Cart = async () => {
  const currentUser = await getLoggedInUser();
  return (
    <div className="pt-10">
      <Container>
        <ProductCartClient currentUser={currentUser} />
      </Container>
    </div>
  );
};

export default Cart;
