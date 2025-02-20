"use client";

import React from "react";

import { Menu, MenuItem } from "@mui/material";
import FilterProductsMenu from "./FilterProductsMenu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterProductsMobile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="my-1">
      <button
        id="basic-button"
        className="flex ml-10 items-center gap-x-1"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <h1 className="font-semibold text-xl">Filter</h1>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <Menu
        id="basic-menu"
        className="w-full"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <FilterProductsMenu />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default FilterProductsMobile;
