"use client";
import { categories } from "@/utils/categories";
import { gender } from "@/utils/genders";
import { priceOptions } from "@/utils/priceOptions";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
interface FilterProductsProps {
  genderParam?: string;
  categoryParam?: string;
  priceParam?: string;
  brandParam?: string;
}

const FilterGender = ({
  genderParam,
  categoryParam,
  priceParam,
  brandParam,
}: FilterProductsProps) => {
  const handleGender = (genderLabel: string) => {
    if (categoryParam && priceParam) {
      return `/products?brand=${brandParam}&category=${categoryParam}&price=${priceParam}&gender=${genderLabel}`;
    }
    if (categoryParam) {
      return `/products?brand=${brandParam}&category=${categoryParam}&gender=${genderLabel}`;
    }

    if (priceParam) {
      return `/products?brand=${brandParam}&gender=${genderLabel}&price=${priceParam}`;
    } else {
      return `/products?brand=${brandParam}&gender=${genderLabel}`;
    }
  };
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
        className="flex justify-between gap-x-1 items-center"
      >
        <h1 className="font-semibold text-xl">Gender</h1>
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
        <div className="overflow-hidden grid py-[5px] border-b-[1px]  border-stone-600">
          {gender.map((item) => (
            <Link
              className="text-nowrap hover:underline text-lg"
              key={item.label}
              href={handleGender(item.label)}
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

export default FilterGender;
