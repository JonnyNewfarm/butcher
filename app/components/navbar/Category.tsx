"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import { IconType } from "react-icons";
import queryString from "query-string";
import { gender } from "@/utils/genders";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { categories } from "@/utils/categories";
import { Container } from "postcss";
import { dividerClasses } from "@mui/material";
import { brands } from "@/utils/brands";
import DropdownBrand from "./DropDownBrand";

interface CategoryProps {
  label?: string;

  href?: string;
}

const Category = ({ label, href }: CategoryProps) => {
  const [open, setOpen] = useState(false);
  const showFlyOut = open && DropdownMenu;
  const [brand, setBrand] = useState("");
  function handleFlyoutEnter() {
    setOpen(true);
    setBrand(`${label}`);
  }
  console.log(brand);
  if (brand != "Brands") {
    return (
      <>
        <div
          className="group relative"
          onMouseEnter={handleFlyoutEnter}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="px-10 pt-4 mb-8 flex flex-row items-center justify-center pb-4 ">
            <Link
              href={`/products?gender=${label}`}
              className={`relative hover:text-stone-900  cursor-pointer
   
    `}
            >
              {label}
              <span
                style={{ transform: showFlyOut ? "scaleX(1)" : "scaleX(0)" }}
                className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-stone-500 transition-transform duration-300 ease-out"
              />
            </Link>
          </div>

          {showFlyOut && (
            <div className="absoulte -translate-x-1/2">
              <div className="absolute -top-6 min-w-[250px]  gap-x-24  bg-custom-color rounded-l p-4 gap-y-6 grid grid-cols-1 ">
                {categories.map((item) => (
                  <DropdownMenu
                    key={item.label}
                    gender={label}
                    category={item.label}
                    brand={() => setBrand(item.label)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="group relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="px-10 pt-4 mb-8 flex flex-row  pb-4 ">
            <Link
              href={`/products?gender=${label}`}
              className={`relative hover:text-stone-900  cursor-pointer
 
  `}
            >
              {label}
              <span
                style={{ transform: showFlyOut ? "scaleX(1)" : "scaleX(0)" }}
                className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-stone-500 transition-transform duration-300 ease-out"
              />
            </Link>
          </div>

          {showFlyOut && (
            <div className="absoulte   -translate-x-1/2">
              <div className="absolute -top-6 min-w-[250px]  gap-x-24 bg-custom-color rounded-l p-4 gap-y-6 grid grid-cols-2 ">
                {brands.map((item) => (
                  <DropdownBrand
                    brands={item.label}
                    key={item.label}
                    gender={label}
                    category={item.label}
                    brand={() => setBrand(brand)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
};

export default Category;
