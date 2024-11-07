"use client";

import { imageSlides } from "@/utils/imageSlides";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {
  FaArrowAltCircleRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
type ImageSliderProps = {
  imageUrls: StaticImageData[];
};

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageTitle, setImageTitle] = useState("");

  const router = useRouter();
  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }
  function handleLink() {
    if (imageIndex === 0) {
      return "/products";
    }

    if (imageIndex === 1) {
      return "/products?brand=Dormo";
    }

    if (imageIndex === 2) {
      return "/products?brand=Lunettes";
    }
  }

  function handleTitle() {
    if (imageIndex === 0) {
      return (
        <h1 className="ml-4 text-nowrap drop-shadow-[0_1.2px_1.2px_rgba(255,255,255, 0.9)]">
          New in
        </h1>
      );
    }

    if (imageIndex === 1) {
      return (
        <h1 className="ml-4 text-nowrap drop-shadow-[0_1.2px_1.2px_rgba(255,255,255, 0.9)]">
          Dormo
        </h1>
      );
    }

    if (imageIndex === 2) {
      return (
        <h1 className="ml-4 text-nowrap drop-shadow-[0_1.2px_1.2px_rgba(255,255,255, 0.9)]">
          Lunettes
        </h1>
      );
    }
  }
  return (
    <div className="md:max-w-[500px] relative">
      <div className="w-full h-full overflow-hidden flex">
        {imageUrls.map((url) => (
          <Image
            key="ok"
            className="rounded-xl transition-transform duration-300 ease-in-out"
            alt="okok"
            src={imageUrls[imageIndex]}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <div className="w-[45%] absolute top-12 font-semibold text-stone-800 text-[30px] bg-custom-color/50 px-4 rounded-r-xl">
        {handleTitle()}
      </div>

      <button
        onClick={showNextImage}
        className="absolute top-0 bottom-0 p-5 text-custom-color right-0 hover:scale-105"
      >
        <div className="bg-stone-800 p-2 rounded-full">
          <FaArrowRight size={18} />
        </div>
      </button>
      <button
        onClick={showPrevImage}
        className="absolute top-0 bottom-0 p-5 text-custom-color left-0 hover:scale-105"
      >
        <div className="bg-stone-800 p-2 rounded-full">
          <FaArrowLeft size={18} />
        </div>
      </button>
      <button
        className="absolute bottom-12 rounded-xl px-8 py-3 text-custom-color bg-stone-800 border-[0.5px] left-10"
        onClick={() => router.push(`${handleLink()}`)}
      >
        Shop now
      </button>

      <div className="absolute bottom-0 py-2 bg-stone-800/20 w-full flex justify-center">
        {imageUrls.map((_, index) => (
          <button
            className="mx-10 bg-custom-color h-3 w-3 rounded-full border-[1px] border-stone-800/20"
            onClick={() => setImageIndex(index!)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
