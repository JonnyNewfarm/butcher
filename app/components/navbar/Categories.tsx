"use client";
import React from "react";
import Container from "../Container";

import Category from "./Category";

import { gender } from "@/utils/genders";

const Categories = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-row  items-center justify-center">
          {gender.map((item) => (
            <Category key={item.label} href={item.label} label={item.label} />
          ))}
          <hr />
        </div>
      </Container>
      <div className="flex justify-center">
        <hr className="mt-[-40px] w-[50%] justify-center border-stone-200 shadow-sm" />
      </div>
    </div>
  );
};

export default Categories;
