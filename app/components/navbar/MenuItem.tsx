"use client";
import React from "react";
interface MenuItemsProps {
  children: React.ReactNode;
  onclick: () => void;
}

const MenuItem = ({ children, onclick }: MenuItemsProps) => {
  return (
    <div
      onClick={onclick}
      className="
  px-4
  py-3
  hover:bg-neutral-100
  trasition
  
  "
    >
      {children}
    </div>
  );
};

export default MenuItem;
