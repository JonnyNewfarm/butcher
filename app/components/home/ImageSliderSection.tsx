"use client";
import React from "react";
import { BsArrowBarDown, BsArrowDown } from "react-icons/bs";

const ImageSliderSection = () => {
  return (
    <div>
      <div className="relative w-full sm:px-6   text-center  font-bold text-7xl py-7 ">
        <h1>Spring</h1>
        <h1>Collection</h1>
        <h1 className="">2025</h1>
      </div>
      <div className="-mt-16 ml-6 mb-2 sm:hidden">
        <BsArrowDown size={60} />
      </div>
    </div>
  );
};

export default ImageSliderSection;
