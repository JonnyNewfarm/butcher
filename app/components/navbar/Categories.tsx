"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";

import Category from "./Category";

import { navMenuItems } from "@/utils/NavMenuItems";

const Categories = () => {
  return (
    <div className="bg-white h-12 shadow-sm">
      <Container>
        <div className="flex flex-row  items-center justify-center">
          {navMenuItems.map((item) => (
            <Category
              key={item.label}
              href={item.label}
              label={item.label}
              gender={item.label}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <span className="w-[80%] md:w-[50%] lg:w-[30%] h-[1px] bg-stone-400 shadow-sm absolute mt-[-40px]"></span>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
