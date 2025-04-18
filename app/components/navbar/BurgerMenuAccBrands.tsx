"use client";
import { brands } from "@/utils/brands";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface BurgerMenuAccordionProps {
  category?: string;
  title?: string;
}

const BurgerMenuAccBrands = ({ category, title }: BurgerMenuAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-2 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center font-bold  text-xl w-full"
      >
        <span>{title}</span>
        {isOpen ? (
          <span>
            <IoIosArrowUp />
          </span>
        ) : (
          <span>
            <IoIosArrowDown />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm text-stone-600
            ${
              isOpen
                ? `grid-rows-[1fr] opacity-100`
                : `grid-rows-[0fr] opacity-0`
            }`}
      >
        <div className="overflow-hidden  grid py-[5px] border-b-[1px]  border-stone-600 ">
          {brands.map((item) => (
            <Link
              key={item.label}
              className="overflow-hidden hover:underline text-lg py-1"
              href={`products?brand=${item.label}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenuAccBrands;
