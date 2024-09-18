import React from "react";

interface CheckoutFormProps {
  clientSecret: string;
  handleSetPaymentSuccess: (value: boolean) => void;
}

const CheckoutFormEl = ({
  clientSecret,
  handleSetPaymentSuccess,
}: CheckoutFormProps) => {
  return <div>CheckoutFormEl</div>;
};

export default CheckoutFormEl;
