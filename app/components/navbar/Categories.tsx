"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";

import Category from "./Category";

import { navMenuItems } from "@/utils/NavMenuItems";
import { usePathname } from "next/navigation";

const Categories = () => {
  return (
    <div className="flex justify-center invisible lg:visible">
      <div className="bg-opacity-0  lg:mt-[-50px] h-12  w-[500px]">
        <div
          className={`flex flex-row text-stone-900 text-[17px]  items-center justify-center`}
        >
          {navMenuItems.map((item) => (
            <Category
              key={item.label}
              href={item.label}
              label={item.label}
              gender={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
