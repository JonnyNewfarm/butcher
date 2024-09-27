"use client";
import React from "react";
import Container from "../Container";
import { categories } from "@/utils/categories";
import Category from "./Category";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const mainPage = pathname === "/";

  if (!mainPage) return null;
  return (
    <div className="bg-white">
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <Category
              key={item.label}
              selected={
                category === item.label ||
                (category === null && item.label === "Home")
              }
              label={item.label}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
