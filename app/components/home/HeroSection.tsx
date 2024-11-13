"use client";
import React from "react";
import Image from "next/image";
import heroSection from "@/public/heroSection.jpeg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className=" flex flex-col-reverse rounded-xl gap-x-32 md:flex-row sm:flex-col-reverse justify-center relative z-10 md:mt-10 lg:mt-20 md:mb-28   mb-10 w-[80%]  bg-custom-color-light lg:px-20 xl:px-28">
      <div className="mt-5 text-left sm:items-center sm:justify-center flex flex-col">
        <div>
          <div className="text-left text-[35px] font-extrabold md:text-[30px] lg:text-[30px] xl:text-[45px] md:mt-[-20px]  2xl:text-[55px] text-nowrap">
            <h1>New in</h1>
            <h1 className="mt-[-15px]">By Dormo</h1>
            <h1 className="mt-[-15px]">Fall collection</h1>
          </div>
          <div className="max-w-80 sm:w-full">
            <p className="mb-5">
              Donec mollis massa et mauris rhoncus aliquam. Fusce scelerisque,
              risus eget suscipit blandit, nibh ante tincidunt.
            </p>
          </div>
          <Link
            className="bg-stone-800 hover:opacity-95 rounded-xl py-3 px-8 text-custom-color text-center"
            href={`products?brand=Dormo`}
          >
            Shop now
          </Link>
        </div>
      </div>

      <div className="w-full relative  xl:w-[45%]">
        <div className="absolute ml-[18%] sm:ml-[20%] mt-[15%] flex flex-col text-custom-color text-sm hover:scale-105 transition justify-center  cursor-pointer pt-2 pb-2   hover:bg-opacity-85 rounded">
          <h1 className="font-semibold text-[15px] sm:text-[20px] opacity-90">
            By
          </h1>
          <h1 className="font-semibold text-custom-color text-[25px] sm:text-[30px]">
            Dormo
          </h1>
        </div>
        <Link href={`products?brand=Dormo`}>
          <Image
            className="object-cover rounded-xl border-none"
            src={heroSection}
            alt="Sunglasses"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
