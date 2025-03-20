"use client";
import Image from "next/image";
import React from "react";
import category1 from "../../../public/category1.jpeg";
import category2 from "../../../public/category2.jpeg";
import category3 from "../../../public/category3.jpeg";

import Link from "next/link";

const CategorySection = () => {
  return (
    <div className="w-full border-dashed border-t-[1px] border-black flex justify-center items-center">
      <div
        className="
     flex flex-col gap-x-10 gap-y-20 md:flex-row px-4 py-20"
      >
        <Link href={"/products?gender=Men"}>
          <div className="md:w-[27.5vw] relative">
            <Image
              className="object-cover"
              alt="women in sunglasses"
              src={category1}
            />
            <div className="absolute uppercase bottom-10 font-bold text-3xl px-5 py-2 flex justify-center text-white bg-stone-900 left-0">
              <h1 className="">Men</h1>
            </div>
          </div>
        </Link>
        <Link href={"/products?gender=Women"}>
          <div className="md:w-[27.5vw] relative">
            <Image
              className="object-cover"
              alt="women in sunglasses"
              src={category2}
            />

            <div className="absolute uppercase bottom-10 font-bold text-3xl px-5 py-2 flex justify-center text-white bg-stone-900 left-0">
              <h1 className="">Women</h1>
            </div>
          </div>
        </Link>
        <Link href={"/products?brand=Dormo"}>
          <div className="md:w-[27.5vw] relative">
            <Image
              className="object-cover"
              alt="women in sunglasses"
              src={category3}
            />

            <div className="absolute uppercase bottom-10 font-bold text-3xl px-5 py-2 flex justify-center text-white bg-stone-900 left-0">
              <h1 className="">brands</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
