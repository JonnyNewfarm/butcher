"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "./HeroSection";
import Link from "next/link";

const HeroContainer = () => {
  return (
    <div className="">
      <HeroSection />
      <HeroSection2 />
    </div>
  );
};

export default HeroContainer;

const HeroSection2 = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-120%"]);

  return (
    <div className="relative">
      <div ref={containerRef} className=" h-screen w-full z-10">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-stone-900/20" />

        <motion.div
          className="absolute w-full flex-col left-0 top-0 mt-32 sm:mt-44 h-screen flex  justify-center text-white text-4xl sm:text-6xl font-bold"
          style={{ y: textY }}
        >
          <h1 className="text-center uppercase">New arrivals</h1>
          <h1 className="text-center uppercase">in store</h1>
        </motion.div>

        <div className="absolute bottom-16 sm:transform-none -translate-x-1/2 left-1/2  sm:left-14 z-10 text-white text-3xl font-bold">
          <Link
            className="border-[3px] text-nowrap uppercase border-white py-2 px-5"
            href={"/products"}
          >
            Check it out
          </Link>
        </div>
      </div>
    </div>
  );
};
