"use client";
import Link from "next/link";
import React from "react";

interface DropdownMenuProps {
  gender: string | undefined;
  category: string | undefined;
  brand: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const DropdownMenu = ({ category, gender }: DropdownMenuProps) => {
  return (
    <Link
      className="hover:underline"
      href={`/products?gender=${gender}&category=${category}`}
    >
      {category}
    </Link>
  );
};

export default DropdownMenu;
