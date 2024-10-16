"use client";
import Link from "next/link";
import React from "react";
interface BrandLinkProps {
  label?: string;
}

const BrandLink = ({ label }: BrandLinkProps) => {
  return (
    <Link
      key={label}
      className="bg-stone-300 rounded-lg border-b-2 border-t-0 border-r-0 text-center  opacity-90 py-3 px-8 text-stone-800"
      href={`/products?brand=${label}`}
    >
      {label}
    </Link>
  );
};

export default BrandLink;
