"use client";
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import heroSection from "@/public/heroSection.jpeg";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Container from "../Container";
import { BsBorderWidth } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className=" flex flex-col-reverse xl:flex-row rounded-xl lg:flex-row  md:flex-col-reverse sm:flex-col-reverse justify-center relative z-10 mt-5 mb-10 w-[80%]  bg-custom-color-light md:px-20 md:pt-10">
      <div className="flex flex-col align-middle lg:w-full  pt-20 pl-8 gap-2">
        <div className="gap-y-0">
          <h1 className="font-extrabold text-[50px]">Lorem ipsum</h1>
          <h1 className="font-bold text-[50px]"> dolor libero vitae</h1>
          <h1 className="font-bold text-[50px]"> neque</h1>

          <p className="pt-1 ">
            Nam fermentum et libero vitae gravida. Phasellus{" "}
          </p>
          <p>consequat lorem integer neque diam.</p>
          <hr className="w-[20%]" />
        </div>

        <div className="mt-5">
          <Link
            className="bg-stone-800 rounded-xl py-3 px-8 text-custom-color text-center"
            href={``}
          >
            Shop now
          </Link>
        </div>
      </div>

      <div className="w-full relative">
        <div className="absolute mt-[15%] ml-[20%] flex flex-col text-custom-color text-sm hover:scale-105 transition justify-center  cursor-pointer pt-2 pb-2   hover:bg-opacity-85 rounded">
          <h1 className="font-semibold text-[20px]">By</h1>
          <h1 className="font-semibold text-[30px]">Dormo</h1>
        </div>
        <div className="absolute"></div>

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
