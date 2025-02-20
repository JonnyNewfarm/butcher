"use client";
import { categories } from "@/utils/categories";
import Link from "next/link";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
interface FilterProductsProps {
  genderParam?: string;
}

const FilterProducts = ({ genderParam }: FilterProductsProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const handleAccordion = () => {
    if (accordionOpen === true) {
      setAccordionOpen(false);
    }
    if (accordionOpen === false) {
      setAccordionOpen(true);
    }
  };
  return (
    <div className="sm:py-2">
      <button
        onClick={() => handleAccordion()}
        className="flex items-center gap-x-1 justify-between w-full"
      >
        <h1 className="font-semibold text-nowrap text-lg">Category</h1>
        {accordionOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out
       ${
         accordionOpen
           ? `grid-rows-[1fr] opacity-100`
           : `grid-rows-[0fr] opacity-0`
       }`}
      >
        <div className="overflow-hidden grid py-[5px] border-b-[1px]  border-stone-600">
          {categories.map((item) => (
            <Link
              className="hover:underline text-lg"
              key={item.label}
              href={`/products?gender=${genderParam}&category=${item.label}`}
            >
              {item.label}
              <hr className="w-[20%]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
