"use client";
import React from "react";
import { ProductType } from "../products/ProductDetails";
import { formatPrice } from "@/utils/foramtPrice";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "../products/SetQuantity";
import { useCart } from "@/hooks/useProductCart";
interface CartItemsProps {
  item: ProductType;
}

const CartItems = ({ item }: CartItemsProps) => {
  const { handleRemoveFromCart, handleCartIncrease, handleCartDecrease } =
    useCart();
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-300 py-4 items-center">
      <div
        className="
      col-span-2
      justify-self-start
      flex
      gap-2
      md:gap-4
    
      "
      >
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[80px] h-[80px] aspect-square">
            <Image
              className="object-contain"
              alt={item.name}
              fill
              src={item.selectedImage.image}
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link className="font-bold" href={`/product/${item.id}`}>
            {truncateText(item.name)}
          </Link>
          <div className="w-[70px]">
            <button
              className="underline"
              onClick={() => handleRemoveFromCart(item)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleCartDecrease={() => {
            handleCartDecrease(item);
          }}
          handleCartIncrease={() => {
            handleCartIncrease(item);
          }}
        />
      </div>
      <div className="justify-self-end font-semibold">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default CartItems;
