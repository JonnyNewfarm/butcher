"use client";
import React from "react";
import BrandLink from "./BrandLink";
import { brands } from "@/utils/brands";
import Image from "next/image";
import brandSection2 from "@/public/brandSection2.jpg";

const Brands = () => {
  return (
    <div className="flex space-x-4 bg-custom-color-light">
      <div className="flex flex-row-reverse h-[200px]">
        <div className="mt-10 text-stone-800 font-semibold text-[40px] align-middle">
          <h1>Our</h1>
          <h1>brands</h1>
        </div>
        <div>
          <Image
            className="object-contain w-full h-[200px]"
            src={brandSection2}
            alt="sunglasses"
          />
        </div>
      </div>
      <div className="grid grid-cols-3">
        {brands.map((item) => (
          <BrandLink key={item.label} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
