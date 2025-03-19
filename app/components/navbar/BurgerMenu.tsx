"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import BurgerMenuAccordion from "./BurgerMenuAccordion";
import BurgerMenuAccBrands from "./BurgerMenuAccBrands";
import { Drawer, Menu, MenuItem } from "@mui/material";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchBar from "./SearchBar";
import SearchBarMobile from "./SearchbarMobile";

const FilterProductsMobile = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="absolute right-3 top-4 lg:hidden">
      <button onClick={toggleDrawer(true)}>
        <CiMenuBurger size={25} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="w-[60vw] bg-[#e4e4e1] p-5 flex flex-col gap-y-5">
          <h1 className="text-3xl font-bold">Lunnettes</h1>
          <div className="flex flex-col justify-start">
            <h1 className="font-semibold text-lg">Search</h1>
            <SearchBarMobile />
          </div>
          <div>
            <BurgerMenuAccordion gender="Men" />
            <BurgerMenuAccordion gender="Women" />
            <BurgerMenuAccBrands title="Brands" />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default FilterProductsMobile;
