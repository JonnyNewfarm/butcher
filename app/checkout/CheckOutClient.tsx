"use client";
import { useCart } from "@/hooks/useProductCart";
import { Metadata } from "next";
import { useRouter } from "next/navigation";

import { Elements } from "@stripe/react-stripe-js";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import CheckoutFormEl from "./CheckoutFormEl";
import Button from "../components/Button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutClient = () => {
  const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const router = useRouter();
  console.log("ClientSecret", clientSecret);
  console.log("paymentIntent", paymentIntent);

  useEffect(() => {
    if (cartProducts) {
      setLoading(true);
      setError(false);

      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartProducts,
          payment_intent_id: paymentIntent,
        }),
      })
        .then((res) => {
          setLoading(false);
          if (res.status === 401) {
            return router.push("/");
          }
          return res.json();
        })
        .then((data) => {
          setClientSecret(data.paymentIntent.client_secret);
          handleSetPaymentIntent(data.paymentIntent.id);
        })
        .catch((error) => {
          setError(true);
          console.log("Error", error);
          toast.error("ups");
        });
    }
  }, [cartProducts, paymentIntent]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };

  const handleSetPaymentSuccess = useCallback((value: boolean) => {
    setPaymentSuccess(value);
  }, []);
  return (
    <div className="w-full">
      {clientSecret && cartProducts && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutFormEl
            clientSecret={clientSecret}
            handleSetPaymentSuccess={handleSetPaymentSuccess}
          />
        </Elements>
      )}

      {loading && <div className="text-center">Loading </div>}
      {error && <div className="text-center text-rose-400">Error </div>}
      {paymentSuccess && (
        <div>
          <div>Payment success</div>
          <div></div>

          <Button label="View your orders" onClick={() => router.push("/")} />
        </div>
      )}
    </div>
  );
};

export default CheckoutClient;
