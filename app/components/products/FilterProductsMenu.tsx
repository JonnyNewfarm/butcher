"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import FilterPrice from "./FilterPrice";
import FilterProducts from "./FilterProducts";
import FilterPriceBrand from "./FilterPriceBrands";
import FilterProductsBrand from "./FilterProductsBrand";
import FilterGender from "./FilterGenderBrand";

const FilterProductsMenu = () => {
  const searchParams = useSearchParams();
  const genderParams = searchParams?.get("gender");
  const categoryParams = searchParams?.get("category");
  const priceParams = searchParams?.get("price");
  const brandParams = searchParams?.get("brand");
  if (brandParams) {
    return (
      <div className="mr-4">
        <FilterPriceBrand brandParam={brandParams} />
        <FilterProductsBrand brandParam={brandParams} />
        <FilterGender
          genderParam={genderParams!}
          priceParam={priceParams!}
          brandParam={brandParams}
          categoryParam={categoryParams!}
        />
      </div>
    );
  } else {
    return (
      <div className="mr-4">
        <FilterPrice
          genderParam={genderParams!}
          categoryParam={categoryParams!}
        />
        <FilterProducts genderParam={genderParams!} />
      </div>
    );
  }
};

export default FilterProductsMenu;
