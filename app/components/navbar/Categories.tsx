"use client";
import React from "react";
import Container from "../Container";

import Category from "./Category";

import { gender } from "@/utils/genders";
import Link from "next/link";
import { navMenuItems } from "@/utils/NavMenuItems";

const Categories = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-row  items-center justify-center">
          {navMenuItems.map((item) => (
            <Category key={item.label} href={item.label} label={item.label} />
          ))}

          <hr />
        </div>
      </Container>
      <div className="flex justify-center">
        <hr className="w-[80%] mt-[-40px] lg:w-[40%] justify-center border-stone-200 shadow-sm" />
      </div>
    </div>
  );
};

export default Categories;
