"use client";
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import openart from "@/public/openart.jpg";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row rounded-md lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-center relative z-10 mt-5 mb-10 w-[80%] xl:border-b-2 xl:shadow-sm bg-white">
      <div className="flex flex-col align-middle lg:w-full  pt-20 pl-8 gap-5">
        <div>
          <h1 className="font-bold text-lg  xl:text-2xl md:text-lg">
            Lorem ipsum dolor
          </h1>
          <p className="font-semibold pt-3">
            Fusce ut efficitur miviverra urna ut in eros. 
          </p>
          <p className="pt-1 ">
            Nam fermentum et libero vitae gravida. Phasellus{" "}
          </p>
          <p>consequat lorem integer neque diam.</p>
          <hr className="w-[20%]" />
        </div>

        <div>
          <p className="font-semibold pt-3">Fusce ut efficitur miviver </p>
          <p className="pt-1">Nam fermentum et libero vitae gravida</p>
          <hr className="w-[20%]" />
        </div>

        <div className="">
          <p className="font-semibold pt-3">
            Fusce ut efficitur miviverra urna 
          </p>
          <p className="pt-1">Nam fermentum et libero vitae gravida</p>
          <p>consequat lorem integer neque.</p>
          <hr className="w-[20%]" />
          <p className="mt-5">
            <Link className="underline font-semibold" href={"/"}>
              View more
            </Link>
          </p>
        </div>
      </div>

      <div className="absolute mt-[-170px] md:mt-[150px] lg:mt-[200px]  mb-14   flex flex-col text-white text-center hover:scale-105 transition justify-center cursor-pointer pt-3 pb-3  z-20 bg-[#867070] h-[100px] w-[250px] bg-opacity-90 hover:bg-opacity-85 rounded">
        <h1 className="font-light">Check out</h1>
        <h1 className="font-light">new arrivals</h1>

        <FaArrowRight size={13} className="ml-[48%] mt-1" />
      </div>

      <div className="w-full">
        <Image
          className="object-cover rounded"
          src={openart}
          alt="Sunglasses"
        />
      </div>
    </div>
  );
};

export default HeroSection;
