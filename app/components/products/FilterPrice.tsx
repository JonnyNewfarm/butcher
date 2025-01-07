"use client";
import { categories } from "@/utils/categories";
import { gender } from "@/utils/genders";
import { priceOptions } from "@/utils/priceOptions";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";
interface FilterProductsProps {
  genderParam?: string;
  categoryParam?: string;
  priceParam?: string;
  brandParam?: string;
}

const FilterPrice = ({
  genderParam,
  categoryParam,
  priceParam,
  brandParam,
}: FilterProductsProps) => {
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
        className="flex  justify-between"
      >
        <h1 className="font-semibold text-nowrap">Price</h1>
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
        <div className="overflow-hidden grid py-[5px] border-b-[1px]  border-stone-600">
          {priceOptions.map((item) => (
            <Link
              className="text-nowrap hover:underline"
              key={item.label}
              href={`/products?gender=${genderParam}&category=${categoryParam}&price=${item.value}`}
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

export default FilterPrice;
