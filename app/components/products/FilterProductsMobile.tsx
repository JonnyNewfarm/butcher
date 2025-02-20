"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import FilterPrice from "./FilterPrice";
import FilterProducts from "./FilterProducts";
import FilterPriceBrand from "./FilterPriceBrands";
import FilterProductsBrand from "./FilterProductsBrand";
import FilterGender from "./FilterGenderBrand";

const FilterProductsMobile = () => {
  const searchParams = useSearchParams();
  const genderParams = searchParams?.get("gender");
  const categoryParams = searchParams?.get("category");
  const priceParams = searchParams?.get("price");
  const brandParams = searchParams?.get("brand");

  if (brandParams) {
    return (
      <div className="sm:hidden flex flex-row gap-x-4 mt-3">
        <FilterPriceBrand
          genderParam={genderParams!}
          categoryParam={categoryParams!}
          brandParam={brandParams}
        />

        <FilterProductsBrand
          genderParam={genderParams!}
          priceParam={priceParams!}
          brandParam={brandParams}
        />
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
      <div className="sm:hidden flex flex-row gap-x-4 mt-3">
        <FilterPrice
          genderParam={genderParams!}
          categoryParam={categoryParams!}
        />

        <FilterProducts genderParam={genderParams!} />
        <FilterGender genderParam={genderParams!} />
      </div>
    );
  }
};

export default FilterProductsMobile;
