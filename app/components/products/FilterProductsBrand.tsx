"use client";
import { categories } from "@/utils/categories";
import Link from "next/link";

import React, { useState } from "react";
interface FilterProductsProps {
  genderParam?: string;
  categoryParam?: string;
  priceParam?: string;
  brandParam?: string;
}

const FilterProductsBrand = ({
  brandParam,
  categoryParam,
  priceParam,
  genderParam,
}: FilterProductsProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const handlePrice = (categoryOption: string) => {
    if (priceParam && genderParam) {
      return `/products?brand=${brandParam}&category=${categoryOption}&gender=${genderParam}&price=${priceParam}`;
    }
    if (priceParam) {
      return `/products?brand=${brandParam}&category=${categoryOption}&price=${priceParam}`;
    }

    if (genderParam) {
      return `/products?brand=${brandParam}&gender=${genderParam}&category=${categoryOption}`;
    } else {
      return `/products?brand=${brandParam}&category=${categoryOption}`;
    }
  };

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
        className="flex justify-between"
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
        <div className="overflow-hidden grid py-[5px] border-b-[1px]  border-stone-600">
          {categories.map((item) => (
            <Link
              className="hover:underline"
              key={item.label}
              href={handlePrice(item.label)}
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

export default FilterProductsBrand;
