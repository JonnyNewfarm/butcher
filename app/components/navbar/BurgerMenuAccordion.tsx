"use client";
import { categories } from "@/utils/categories";
import Link from "next/link";
import React, { useState } from "react";
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
        className="flex justify-between w-full"
      >
        <span>{gender}</span>
        {isOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm text-stone-600
            ${
              isOpen
                ? `grid-rows-[1fr] opacity-100`
                : `grid-rows-[0fr] opacity-0`
            }`}
      >
        <div className="overflow-hidden grid py-[5px] border-b-[1px]  border-stone-600 ">
          {categories.map((item) => (
            <Link
              key={item.label}
              className="overflow-hidden py-1"
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
