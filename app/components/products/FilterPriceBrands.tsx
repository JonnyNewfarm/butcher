"use client";
import { categories } from "@/utils/categories";
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

const FilterPriceBrand = ({
  genderParam,
  categoryParam,
  priceParam,
  brandParam,
}: FilterProductsProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [linkUnderline, setLinkUnderline] = useState(false);
  const handlePrice = (priceOption: string) => {
    if (categoryParam && genderParam) {
      return `/products?brand=${brandParam}&category=${categoryParam}&gender=${genderParam}&price=${priceOption}`;
    }
    if (categoryParam) {
      return `/products?brand=${brandParam}&category=${categoryParam}&price=${priceOption}`;
    }

    if (genderParam) {
      return `/products?brand=${brandParam}&gender=${genderParam}&price=${priceOption}`;
    } else {
      return `/products?brand=${brandParam}&price=${priceOption}`;
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
    <div className="py-2">
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
        <div className="overflow-hidden grid py-[5px] border-b-[1px]  border-stone-600 ">
          {priceOptions.map((item) => (
            <Link
              className={`text-nowrap hover:underline`}
              key={item.label}
              href={handlePrice(item.value!)}
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

export default FilterPriceBrand;
