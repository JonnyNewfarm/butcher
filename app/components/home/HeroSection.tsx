"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-full sticky top-0 h-[100vh] sm:bg-[url('/small-hero.jpg')] bg-[url('/mobilehero2.jpg')] md:bg-[url('/medium-hero.jpg')] lg:bg-[url('/coolbg.jpg')] bg-cover">
      <div className="w-full flex justify-center sm:justify-start lg:ml-52 md:ml-28 sm:ml-20 h-full align-middle sm:items-center">
        <div className="mt-[35px] tracking-tight uppercase [@media(min-width:374px)]:mt-[20px] [@media(min-width:389px)]:mt-[65px]">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-bold text-3xl ml-1 -mb-3"
          >
            By{" "}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="text-8xl  font-bold"
          >
            Dormo
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="h-[2px] w-full bg-black"
          />

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="font-extrabold text-7xl mb-4 ml-1"
          >
            New in
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href={"/products?brand=Dormo"}
              className="border-[2px] [@media(min-width:374px)]:py-2 [@media(min-width:389px)]:py-3  max-w-36 text-center text-nowrap border-black py-3 px-5 font-semibold text-lg mt-6 bg-stone-900 text-white rounded-lg hover:bg-slate-900/90"
            >
              Shop now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
