"use client";
import { useCart } from "@/hooks/useProductCart";
import Link from "next/link";
import React from "react";
import Button from "../Button";
import { MdArrowBack } from "react-icons/md";
import CartItems from "./CartItems";
import { formatPrice } from "@/utils/foramtPrice";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProductCartClient = () => {
  const { cartProducts, handleClearCart } = useCart();
  const { totalAmount } = useCart();
  const router = useRouter();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <h1>There are no products in your cart</h1>
        <div>
          <Link href={"/"} className="flex items-center gap-1 mt-2">
            <span className="font-semibold">Browse through products </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Toaster />
      <div className="text-2xl text-center font-semibold mb-8">Your cart</div>
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
        <div className="col-span-2 justify-self-start">Product</div>
        <div className="justify-self-center">Price</div>
        <div className="justify-self-center">Quantity</div>
        <div className="justify-self-end">Total</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts?.map((item) => {
            return <CartItems key={item.id} item={item} />;
          })}
      </div>

      <div className="border-t-[1.5px] border-slate-300 py-4 justify-between gap-4 flex">
        <div className="w-[130px]">
          <Button
            outline
            small
            label="Clear cart"
            onClick={() => {
              handleClearCart();
            }}
          />{" "}
        </div>

        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex w-full justify-between font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(totalAmount)}</span>
          </div>

          <p className="text-slate-600">
            Taxes and cost of shipping calculated at checkout
          </p>
          <Button label="Checkout" onClick={() => router.push("/checkout")} />

          <Link href={"/"} className="flex items-center gap-1 mt-2">
            <MdArrowBack />
            <span>Continue shopping </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCartClient;
