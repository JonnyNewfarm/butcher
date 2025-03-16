"use client";
import { categories } from "@/utils/categories";
import { priceOptions } from "@/utils/priceOptions";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
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
    <div className="sm:py-2">
      <button
        onClick={() => handleAccordion()}
        className="flex  justify-between items-center gap-x-1"
      >
        <h1 className="font-semibold text-xl">Price</h1>
        {accordionOpen ? <FaChevronUp /> : <FaChevronDown />}
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
              className={`text-nowrap hover:underline text-lg`}
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
