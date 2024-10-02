"use client";
import { useCart } from "@/hooks/useProductCart";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

const CartCounter = () => {
  const { totalQuantity } = useCart();
  const router = useRouter();
  return (
    <div
      className="relative cursor-pointer "
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl">
        <BsHandbag strokeWidth="0.1px" style={{ fontWeight: "b" }} />
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
