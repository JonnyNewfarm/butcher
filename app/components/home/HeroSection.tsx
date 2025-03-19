"use client";
import Link from "next/link";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const { scrollY } = useScroll();

  // Move text in opposite directions
  const xText1 = useTransform(scrollY, [0, 300], [0, -100]); // Moves left

  return (
    <div className="w-full sticky top-0 h-[100vh] overflow-hidden">
      <Image
        fill
        priority
        className="object-cover hidden md:block"
        alt="New Dormo Collection"
        src="/heroimg3.jpg"
      />

      <Image
        fill
        priority
        className="object-cover md:hidden"
        alt="New Dormo Collection"
        src="/heroimg1.jpeg"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white bg-stone-900/5">
        <div className="relative md:hidden  text-nowrap flex gap-x-2 mt-[50vh] sm:gap-x-10 uppercase text-4xl sm:text-5xl font-bold tracking-tight">
          <motion.h1 style={{ x: xText1 }}>by Dormo</motion.h1>
          <motion.h1 style={{ x: xText1 }}>-</motion.h1>
          <motion.h1 style={{ x: xText1 }}>New in</motion.h1>
        </div>
        <Link
          className="text-2xl md:hidden font-semibold border-4 border-white py-2 px-5 mt-4 sm:mt-8"
          href="/products?brand=Dormo"
          aria-label="Shop Dormo Collection"
        >
          Shop now
        </Link>
      </div>
      <div className="w-full h-full hidden md:block">
        <div className="absolute -top-1  inset-0 flex flex-col justify-start z-10 text-white bg-stone-900/15">
          <div className="relative ml-[10vw]  text-nowrap flex flex-col gap-x-2 mt-[50vh] sm:gap-x-10 uppercase text-8xl font-bold tracking-tight">
            <motion.h1 className="text-3xl" style={{ x: xText1 }}>
              by
            </motion.h1>
            <motion.h1 style={{ x: xText1 }}>Dormo</motion.h1>

            <motion.h1 className="text-6xl" style={{ x: xText1 }}>
              New in
            </motion.h1>
            <motion.div style={{ x: xText1 }}>
              <Link
                className="text-2xl w-[160px] hidden md:block font-semibold border-4 border-white py-2 px-5 mt-3"
                href="/products?brand=Dormo"
                aria-label="Shop Dormo Collection"
              >
                Shop now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
