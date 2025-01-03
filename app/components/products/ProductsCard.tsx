"use client";

import { formatPrice } from "@/utils/foramtPrice";
import { truncateText } from "@/utils/truncateText";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductsCard = ({ data }: ProductCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/products/${data.id}`)}
      className="col-span-1 
      cursor-pointer
    
  
    border-stone-300
  
    rounded-sm
    p-2
    transition
    hover:scale-[102%]
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
      gap-2
      
      "
      >
        <div className="aspect-square overflow-hidden h-40 relative w-full">
          <Image
            fill
            className="w-full object-contain"
            src={data.images[0].image}
            alt={data.name}
          />
        </div>
        <div className="mt-[-10px]">{truncateText(data.name)}</div>

        <div className="font-semibold">{formatPrice(data.price)}</div>

        <div className="border-[2px] border-custom-color-secondary py-2 px-4 rounded-xl text-nowrap">
          View more
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
