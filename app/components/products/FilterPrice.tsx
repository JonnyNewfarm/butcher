"use client";
import { categories } from "@/utils/categories";
import { priceOptions } from "@/utils/priceOptions";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";
interface FilterProductsProps {
  genderParam?: string;
  categoryParam?: string;
}

const FilterPrice = ({ genderParam, categoryParam }: FilterProductsProps) => {
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
    <div className="">
      <button
        onClick={() => handleAccordion()}
        className="flex w-full justify-between"
      >
        <h1 className="font-semibold">Price</h1>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out
       ${
         accordionOpen
           ? `grid-rows-[1fr] opacity-100`
           : `grid-rows-[0fr] opacity-0`
       }`}
      >
        <div className="overflow-hidden grid">
          {priceOptions.map((item) => (
            <Link
              className="text-nowrap"
              key={item.label}
              href={`/products?gender=${genderParam}&category=${categoryParam}&price=${item.value}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPrice;
