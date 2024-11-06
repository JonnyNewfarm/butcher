import Image from "next/image";
import React from "react";
import closeupMan from "@/public/closeupMan.jpeg.png";
import closeupWomen from "@/public/closeupWoman.jpeg.png";
import closeupBrands from "@/public/closeupBrands.jpeg.png";
import Link from "next/link";

const CategorySection = () => {
  return (
    <div className="w-full flex">
      <Link href={"/products?gender=Men"} className="relative text-center">
        <Image
          className="relative object-cover h-[80%]"
          src={closeupMan}
          alt="man in sunglasses"
        />
        <div className="absolute mt-[-50px] w-full text-center  text-custom-color font-semibold text-xl">
          <h1>Men</h1>
        </div>
      </Link>

      <Link href={"/products?gender=Women"} className="relative text-center">
        <Image
          className="relative object-cover h-[80%]"
          src={closeupWomen}
          alt="woman in sunglasses"
        />
        <div className="absolute mt-[-50px] w-full text-center  text-custom-color font-semibold text-xl">
          <h1>Women</h1>
        </div>
      </Link>

      <Link href={"/products?brand=Dormo"} className="relative text-center">
        <Image
          className="relative object-cover h-[80%]"
          src={closeupBrands}
          alt="sunglasses"
        />
        <div className="absolute mt-[-50px] w-full text-center  text-custom-color font-semibold text-xl">
          <h1>Brands</h1>
        </div>
      </Link>
    </div>
  );
};

export default CategorySection;
