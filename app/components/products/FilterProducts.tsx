"use client";
import { categories } from "@/utils/categories";
import Link from "next/link";

import React, { useState } from "react";
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
    <div className="py-2">
      <button
        onClick={() => handleAccordion()}
        className="flex justify-between w-full"
      >
        <h1 className="font-semibold text-nowrap">Category</h1>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out
       ${
         accordionOpen
           ? `grid-rows-[1fr] opacity-100`
           : `grid-rows-[0fr] opacity-0`
       }`}
      >
        <div className="overflow-hidden grid">
          {categories.map((item) => (
            <Link
              key={item.label}
              href={`/products?gender=${genderParam}&category=${item.label}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;