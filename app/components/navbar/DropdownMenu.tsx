import Link from "next/link";
import React from "react";

interface DropdownMenuProps {
  gender: string | undefined;
  category: string | undefined;
}

const DropdownMenu = ({ category, gender }: DropdownMenuProps) => {
  return (
    <div className="py-2">
      <Link href={`/products?gender=${gender}&category=${category}`}>
        {category}
      </Link>
    </div>
  );
};

export default DropdownMenu;
