"use client";
import { categories } from "@/utils/categories";
import { gender } from "@/utils/genders";
import { priceOptions } from "@/utils/priceOptions";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";
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
    <div className="py-2">
      <button
        onClick={() => handleAccordion()}
        className="flex w-full justify-between"
      >
        <h1 className="font-semibold">gender</h1>
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
          {gender.map((item) => (
            <Link
              className="text-nowrap"
              key={item.label}
              href={handleGender(item.label)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterGender;