"use client";
import React from "react";
import Image from "next/image";
import heroSection from "@/public/heroSection.jpeg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className=" flex flex-col-reverse rounded-xl   md:flex-row sm:flex-col-reverse justify-center relative z-10 md:mt-10 lg:mt-20 md:mb-28   mb-10 w-[80%]  bg-custom-color-light md:px-10">
      <div className="flex flex-col md:w-[70%]  gap-2">
        <div className="mt-[10px] md:mt-[40px] md:mr-2 sm:mt-[15px] lg:mt-[70px] xl:mt-[85px] 2xl:mt-[100px]">
          <div className="text-[30px] mb-1 md:text-[25px] lg:text-[30px] xl:text-[45px]">
            <p className="font-extrabold">Lorem ipsum</p>
            <p className="font-bold mt-[-13px] text-nowrap">
              {" "}
              dolor libero vitae
            </p>
            <p className="font-bold mt-[-13px]"> neque</p>
          </div>

          <p className="pt-1 ">
            Nam fermentum et libero vitae gravida. Phasellus{" "}
          </p>
          <p>consequat lorem integer neque diam.</p>
          <hr className="w-[20%]" />
        </div>

        <div className="mt-5">
          <Link
            className="bg-stone-800 hover:opacity-95 rounded-xl py-3 px-8 text-custom-color text-center"
            href={``}
          >
            Shop now
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-[60%] xl:w-[50%] relative">
        <div className="absolute ml-[18%] sm:ml-[20%] mt-[15%] flex flex-col text-custom-color text-sm hover:scale-105 transition justify-center  cursor-pointer pt-2 pb-2   hover:bg-opacity-85 rounded">
          <h1 className="font-semibold text-[15px] sm:text-[20px] opacity-90">
            By
          </h1>
          <h1 className="font-semibold text-[25px] sm:text-[30px]">Dormo</h1>
        </div>

        <Image
          className="object-cover rounded-xl border-none"
          src={heroSection}
          alt="Sunglasses"
        />
      </div>
    </div>
  );
};

export default HeroSection;
