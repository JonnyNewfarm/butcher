"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import BurgerMenuAccordion from "./BurgerMenuAccordion";
import BurgerMenuAccBrands from "./BurgerMenuAccBrands";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative lg:hidden">
      <CiMenuBurger
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        size={24}
      />
      <div
        className={`absolute lg:hidden  bg-custom-color rounded-xl
        mt-5 min-w-[200px] p-9 right-3 flex flex-col gap-y-5
        transform transition-transform ease-in-out ${
          isOpen ? "visable" : "invisible"
        }
        `}
      >
        <BurgerMenuAccordion gender="Men" />
        <BurgerMenuAccordion gender="Women" />
        <BurgerMenuAccBrands title="Brands" />
      </div>
    </div>
  );
};

export default BurgerMenu;
