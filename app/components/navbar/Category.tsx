"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";

import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { categories } from "@/utils/categories";

import { brands } from "@/utils/brands";
import DropdownBrand from "./DropDownBrand";
import Image from "next/image";
import navImageMen from "@/public/navImageMen.jpeg";
import navImageWomen from "@/public/navImageWomen.jpeg";

interface CategoryProps {
  label?: string;
  gender?: string;
  menuItems?: string;

  href?: string;
}

const Category = ({ label, href, gender, menuItems }: CategoryProps) => {
  const [open, setOpen] = useState(false);
  const showFlyOut = open && DropdownMenu;
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [menuItem, setMenuItem] = useState("");

  function handleFlyoutEnter() {
    setOpen(true);
    setBrand(`${label}`);
    setCategory(`${gender}`);
    setMenuItem(`${label}`);
  }
  function handleFlyoutImage() {
    if (gender === "Women") {
      return navImageWomen;
    }

    if (gender === "Men") {
      return navImageMen;
    }
  }

  function handleFlyout(menuItems: any) {
    if (label === "Women") {
      return "ml-[-60px]";
    }

    if (label === "Brands") {
      return "ml-[-60px]";
    }
  }

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
              className={`relative   cursor-pointer
   
    `}
            >
              {label}
              <span
                style={{ transform: showFlyOut ? "scaleX(1)" : "scaleX(0)" }}
                className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-white transition-transform duration-300 ease-out"
              />
            </Link>
          </div>

          {showFlyOut && (
            <div
              className={`absoulte -translate-x-1/2 flex flex-row ${handleFlyout(
                menuItem
              )}`}
            >
              <div className="absolute -top-6 text-stone-900 bg-custom-color border-stone-800 text-lg border-b-[1px] min-w-[500px] rounded-lg p-6 gap-y-6 grid grid-cols-2 ">
                <div className="grid grid-cols-1">
                  {categories.map((item) => (
                    <DropdownMenu
                      key={item.label}
                      gender={label}
                      category={item.label}
                      brand={() => setBrand(item.label)}
                    />
                  ))}
                </div>

                <div className="relative">
                  <Link
                    href={`http://localhost:3000/products?brand=Dormo&gender=${gender}`}
                  >
                    <Image
                      src={handleFlyoutImage()!}
                      alt="sunglasses man"
                      className="object-contain"
                    />
                    <h1 className="text-stone-100 right-2 text-lg top-[50px] font-semibold absolute">
                      By Dormo
                    </h1>
                  </Link>
                </div>
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
            <div
              className={`relative cursor-pointer
 
  `}
            >
              {label}
              <span
                style={{ transform: showFlyOut ? "scaleX(1)" : "scaleX(0)" }}
                className="absolute bg-white -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full white transition-transform duration-300 ease-out"
              />
            </div>
          </div>

          {showFlyOut && (
            <div
              className={`absoulte  -translate-x-1/2 ${handleFlyout(menuItem)}`}
            >
              <div className="absolute  -top-6 min-w-[350px]  text-stone-900 text-lg  gap-x-24 bg-custom-color rounded-lg p-8 gap-y-6 grid grid-cols-2 border-b-[1px] border-black">
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
