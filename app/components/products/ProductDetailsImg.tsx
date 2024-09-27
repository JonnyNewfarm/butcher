"use client";
import React from "react";
import { ProductType, selectedImageType } from "./ProductDetails";
import Image from "next/image";

interface ImageProps {
  cartProduct: ProductType;
  product: any;
  handleImage: (value: selectedImageType) => void;
}

const ProductDetailsImg = ({
  cartProduct,
  product,
  handleImage,
}: ImageProps) => {
  return (
    <div
      className="grid 
  grid-cols-6
  gap-2
  h-full
  max-h-[500px]
  min-h-[300px]
  sm:min-h-[400px]

  
  "
    >
      <div
        className="flex
flex-col
items-center
justify-center
gap-4
cursor-pointer
border
h-full

max-h-[500px]
  min-h-[300px]
  sm:min-h-[400px]

"
      >
        {product.images.map((image: selectedImageType) => {
          return (
            <div
              onClick={() => handleImage(image)}
              className="relative w-[80%] aspect-square rounded border-black"
              key={image.image}
            >
              <Image
                className="object-contain"
                fill
                src={image.image}
                alt={image.image}
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          fill
          src={cartProduct.selectedImage.image}
          alt={cartProduct.name}
          className="w-full
          
        h-full
        object-contain
        max-h-[500px]
  min-h-[300px]
  sm:min-h-[400px]
        
        "
        />
      </div>
    </div>
  );
};

export default ProductDetailsImg;
