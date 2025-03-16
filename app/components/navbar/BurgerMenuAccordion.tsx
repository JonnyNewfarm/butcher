"use client";
import { categories } from "@/utils/categories";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrow90DegUp, BsArrowDown, BsArrowUp } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface BurgerMenuAccordionProps {
  category?: string;
  gender?: string;
}

const BurgerMenuAccordion = ({
  category,
  gender,
}: BurgerMenuAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex text-xl items-center font-semibold  w-full"
      >
        <span>{gender}</span>
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
        <div className="overflow-hidden text-lg grid py-[5px] border-b-[1px]  border-stone-600 ">
          {categories.map((item) => (
            <Link
              key={item.label}
              className="overflow-hidden py-1 hover:underline"
              href={`products?gender=${gender}&category=${item.label}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenuAccordion;
