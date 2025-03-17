"use client";
import Link from "next/link";
import React from "react";
const ImageCollection = () => {
  return (
    <div className="h-full relative">
      <img src="springCollection6.jpg" className="h-full" alt="" />
      <Link
        href={"/products?brand=Dormo"}
        className="border-[2px] [@media(min-width:374px)]:py-1.5 [@media(min-width:374px)]:text-sm [@media(min-width:374px)]:-mt-10 [@media(min-width:374px)]:px-3 [@media(min-width:780px)]:px-5 [@media(min-width:780px)]:py-2 [@media(min-width:780px)]:text-lg [@media(min-width:780px)]:-mt-16   text-center text-nowrap border-black sm:font-semibold   bg-stone-900 text-white rounded-lg hover:bg-slate-900/90 absolute -mt-16 left-5"
      >
        Shop now
      </Link>
    </div>
  );
};

export default ImageCollection;
