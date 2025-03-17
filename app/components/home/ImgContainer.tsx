"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImgContainerProps {
  src?: any;
  title?: string;
  link?: string;
}

const ImgContainer = ({ src, title, link }: ImgContainerProps) => {
  return (
    <div>
      <Image
        placeholder="blur"
        loading="lazy"
        className="object-cover w-[300px] h-[450px]"
        alt="image"
        src={src}
      />

      <h1 className="text-white/90 font-bold text-xl mt-2 mb-4">{title}</h1>
      <Link
        className="text-white border-[2px] border-white px-4 py-2"
        href={`/products?brand=${title}`}
      >
        Check it out
      </Link>
    </div>
  );
};

export default ImgContainer;
