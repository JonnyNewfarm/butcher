"use client";

import React from "react";

import { Drawer, Menu, MenuItem } from "@mui/material";
import FilterProductsMenu from "./FilterProductsMenu";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";

const FilterProductsMobile = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="p-2">
      <button
        className="ml-5 text-2xl gap-2 flex items-center font-semibold"
        onClick={toggleDrawer(true)}
      >
        Filter <FaPlus size={18} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="w-[50vw] bg-[#e4e4e1] p-5 flex flex-col gap-y-3">
          <h1 className="text-2xl font-bold">Filter options</h1>

          <div>
            <FilterProductsMenu />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default FilterProductsMobile;
