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
      className="py-3 font-semibold px-8 text-stone-800"
      href={`/products?brand=${label}`}
    >
      {label}
    </Link>
  );
};

export default BrandLink;
