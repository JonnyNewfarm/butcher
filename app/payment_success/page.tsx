"use client";
import React, { useEffect } from "react";
import Container from "../components/Container";
import { useCart } from "@/hooks/useProductCart";

const SuccessfulPayment = () => {
  const { handleClearCart } = useCart();

  useEffect(() => {
    handleClearCart();
  }, []);
  return (
    <Container>
      <div className="text-center font-semibold pt-8">Payment Successful</div>
    </Container>
  );
};

export default SuccessfulPayment;
