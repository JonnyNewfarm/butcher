import { useCart } from "@/hooks/useProductCart";
import { formatPrice } from "@/utils/foramtPrice";
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "../components/Button";

interface CheckoutFormProps {
  clientSecret: string;
  handleSetPaymentSuccess: (value: boolean) => void;
}

const CheckoutFormEl = ({
  clientSecret,
  handleSetPaymentSuccess,
}: CheckoutFormProps) => {
  const { totalAmount, handleClearCart, handleSetPaymentIntent } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const formatedPrice = formatPrice(totalAmount);
  const [isLodaing, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
    handleSetPaymentSuccess(false);
  }, [stripe]);

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((results) => {
        if (!results.error) {
          toast.success("Checkout success");
          handleClearCart();
          handleSetPaymentSuccess(true);
          handleSetPaymentIntent(null);
        }

        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handlesubmit} id="payment-form">
      <div className="mb-6">
        <div className="text-center">Enter your details to checkout</div>
      </div>
      <AddressElement
        options={{ mode: "shipping", allowedCountries: ["US", "UK"] }}
      />
      <h2 className="font-semibold mt-4 b-2">Address information</h2>
      <h2 className="font-semibold  mb-2">Payment information</h2>
      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
      <div className="py-4 text-center text-slate-700 font-bold">
        Total: {formatedPrice}
      </div>
      <Button label="Pay now" onClick={() => {}} />
    </form>
  );
};

export default CheckoutFormEl;
