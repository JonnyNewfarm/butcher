"use client";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";

interface ProductCardProps {
  data: any;
}

const productCard = ({ data }: ProductCardProps) => {
  return (
    <div
      className="col-span-1 curser-pointer
    border-[1.2px]
    border-slate-200
    bg-slate-50
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
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default productCard;
