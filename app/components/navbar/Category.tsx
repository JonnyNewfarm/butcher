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

interface CategoryProps {
  label?: string;

  href?: string;
}

const Category = ({ label, href }: CategoryProps) => {
  const [open, setOpen] = useState(false);
  const showFlyOut = open && DropdownMenu;
  return (
    <>
      <div
        className="group relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="px-10 pt-4 flex flex-row items-center justify-center pb-4 ">
          <Link
            href={`/products?gender=${label}`}
            className={`relative hover:text-stone-900 cursor-pointer
   
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
          <div className="absoulte left-3  -translate-x-1/2">
            <div className="absolute -top-6  right-0 h-6 bg-transparent ">
              {categories.map((item) => (
                <div className=" rounded-sm px-5 py-1 bg-white">
                  <DropdownMenu
                    key={item.label}
                    gender={label}
                    category={item.label}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
