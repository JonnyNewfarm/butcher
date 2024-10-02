"use client";
import React from "react";
import Container from "../Container";
import { categories } from "@/utils/categories";
import Category from "./Category";
import { usePathname, useSearchParams } from "next/navigation";
import { gender } from "@/utils/genders";
import DropdownMenu from "./DropdownMenu";

interface CategoryProps {
  selected?: boolean;
}

const Categories = ({ selected }: CategoryProps) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const mainPage = pathname === "/";

  return (
    <div className="bg-white">
      <Container>
        <div className="pt-4  flex flex-row items-center justify-center">
          {gender.map((item) => (
            <Category key={item.label} href={item.label} label={item.label} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
