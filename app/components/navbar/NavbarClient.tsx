"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavBarClient = () => {
  const pathname = usePathname(); // Get current path dynamically
  const [navbarStyle, setNavbarStyle] = useState<string>("");

  useEffect(() => {
    if (pathname === "/") {
      setNavbarStyle(
        "fixed w-full top-0 z-30 bg-transparent border-none text-white transition-all"
      );
    } else {
      setNavbarStyle(
        "sticky top-0 z-30 bg-white backdrop-blur-lg transition-all shadow-md"
      );
    }
  }, [pathname]); // Re-run when pathname changes

  return navbarStyle;
};

export default NavBarClient;
