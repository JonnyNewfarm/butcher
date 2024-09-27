"use client";

import { formatPrice } from "@/utils/foramtPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { selectedImageType } from "./ProductDetails";

interface ProductCardProps {
  data: any;
}

const productCard = ({ data }: ProductCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 
      cursor-pointer
    border-[1.2px]
    border-stone-200
    bg-stone-50
    rounded-sm
    p-2
    transition
    hover:scale-105
    text-center
    text-sm

    "
    >
      <div
        className="
      flex 
      flex-col
      items-center
      w-full
      gap-4
      
      "
      >
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            className="w-full h-full object-contain"
            src={data.images[0].image}
            alt={data.name}
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div></div>

        <div className="font-semibold">{formatPrice(data.price)}</div>
        <div></div>
      </div>
    </div>
  );
};

export default productCard;
