"use client";
import React from "react";
import BrandLink from "./BrandLink";
import { brands } from "@/utils/brands";

const Brands = () => {
  return (
    <div className="flex justify-center bg-custom-color">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4  gap-x-10  ">
        {brands.map((item) => (
          <BrandLink key={item.label} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
