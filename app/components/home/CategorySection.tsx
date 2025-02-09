"use client";
import Image from "next/image";
import React from "react";
import closeupMan from "@/public/closeupMan.jpeg.png";
import closeupWomen from "@/public/closeupWoman.jpeg.png";
import closeupBrands from "@/public/closeupBrands.jpeg.png";
import Link from "next/link";

const CategorySection = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row">
      <Link href={"/products?gender=Men"} className="relative text-center">
        <Image className="relative" src={closeupMan} alt="man in sunglasses" />
        <div className="absolute mt-[-110px] w-full text-center  text-custom-color font-semibold text-5xl">
          <h1>Men</h1>
        </div>
      </Link>

      <Link
        href={"/products?gender=Women"}
        className="relative text-center h-[80%]"
      >
        <Image
          className="relative object-cover"
          src={closeupWomen}
          alt="woman in sunglasses"
        />
        <div className="absolute mt-[-110px] w-full text-center  text-custom-color font-semibold  text-5xl">
          <h1>Women</h1>
        </div>
      </Link>

      <Link
        href={"/products?brand=Dormo"}
        className="relative text-center h-[80%]"
      >
        <Image
          className="relative object-cover"
          src={closeupBrands}
          alt="sunglasses"
        />
        <div className="absolute mt-[-110px] w-full text-center  text-custom-color font-semibold text-5xl">
          <h1>Brands</h1>
        </div>
      </Link>
    </div>
  );
};

export default CategorySection;
