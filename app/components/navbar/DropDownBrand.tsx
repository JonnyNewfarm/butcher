"use client";
import Link from "next/link";
import React from "react";

interface DropdownMenuProps {
  gender: string | undefined;
  category: string | undefined;
  brands: string | undefined;

  brand: () => void;
}

const DropdownBrand = ({ category, gender, brands }: DropdownMenuProps) => {
  return <Link href={`/products?brand=${brands}`}>{category}</Link>;
};

export default DropdownBrand;
