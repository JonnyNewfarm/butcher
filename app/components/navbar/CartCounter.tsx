"use client";
import { useCart } from "@/hooks/useProductCart";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartCounter = () => {
  const { totalQuantity } = useCart();
  const router = useRouter();
  return (
    <div
      className="relative cursor-pointer "
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl">
        <svg
          className="relative"
          fill="currentColor"
          viewBox="0 0 16 16"
          height="27px"
          width="27px"
        >
          <path d="M8 1a2.5 2.5 0 012.5 2.5V4h-5v-.5A2.5 2.5 0 018 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5zM2 5h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5z" />
        </svg>
        <span
          className="absoulte
          mt-[-22px] 
          
         h-6
         
         rounded-full
         flex
         items-center
         justify-center
         text-sm
         
         "
        >
          {totalQuantity}
        </span>
      </div>
    </div>
  );
};

export default CartCounter;
