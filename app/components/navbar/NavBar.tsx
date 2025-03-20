"use client";
import React, { useCallback, useEffect, useState } from "react";
import Container from "../Container";
import Link from "next/link";
import CartCounter from "./CartCounter";
import { getLoggedInUser } from "@/actions/getLoggedInUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import { CiHome, CiUser } from "react-icons/ci";
import BurgerMenu from "./BurgerMenu";
import { MenuItem } from "@mui/material";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { safeUser } from "@/types";
import { usePathname, useRouter } from "next/navigation";

interface navbarProps {
  currentUser: any;
}

const NavBar = ({ currentUser }: navbarProps) => {
  const pathname = usePathname();
  const [pageStyling, setPageStyling] = useState("");
  const [navStyling, setNavStyling] = useState(false);

  useEffect(() => {
    const changeStyle = () => {
      if (window.scrollY >= 90) {
        setNavStyling(true);
      } else {
        setNavStyling(false);
      }
    };

    window.addEventListener("scroll", changeStyle);

    return () => {
      window.removeEventListener("scroll", changeStyle);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setPageStyling(
        `fixed ${
          navStyling
            ? "bg-[#e4e4e1] text-stone-900"
            : "bg-transparent text-white"
        } top-0 z-30 w-full  transition-all`
      );
    } else {
      setPageStyling(
        "sticky top-0 w-full z-30 bg-[#e4e4e1] text-stone-900 transition-all backdrop-blur-lg shadow-md"
      );
    }
  }, [pathname, navStyling]);

  return (
    <div className={pageStyling}>
      <div className="py-3 h-14 align-middle">
        <div className="max-w-[1920px] mx-auto xl:px-20 md:2 px-4">
          <div className="flex items-center justify-between gap text-black-3 md:gap-0">
            <Link href="/" className="font-extrabold text-2xl lg:ml-10">
              LUNNETTES
            </Link>

            <div className="flex items-center gap-8 md:gap-10">
              <SearchBar />
              <Link href={"/"}>
                <CiHome strokeWidth={0.5} size={26} />
              </Link>
              <CartCounter />
              <NavMenu currentUser={currentUser} />
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>

      <Categories />
    </div>
  );
};

export default NavBar;

interface NavMenuProps {
  currentUser: safeUser | null;
}

const NavMenu = ({ currentUser }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const OpenMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative mr-10 lg:mr-0">
        <div onClick={OpenMenu}>
          <CiUser cursor={"pointer"} strokeWidth={"0.5px"} size={25} />

          {isOpen && (
            <div
              className="absolute
            rounded-lg
            shadow-lg
            w-[170px]
            bg-white
            overflow-hidden
            text-stone-900
            right-0
            top-12
            text-sm
            flex
            flex-col
            cursor-pointer
            "
            >
              {currentUser ? (
                <div className=" z-40">
                  <Link href={"/orders"}>
                    <MenuItem onClick={OpenMenu}>Your orders</MenuItem>
                  </Link>

                  <MenuItem
                    onClick={() => {
                      OpenMenu();
                      signOut();
                    }}
                  >
                    Logout
                  </MenuItem>
                </div>
              ) : (
                <div className="z-40">
                  <Link href={"/login"}>
                    <MenuItem onClick={OpenMenu}>Log in</MenuItem>
                  </Link>

                  <Link href={"/register"}>
                    <MenuItem onClick={OpenMenu}>Register</MenuItem>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isOpen ? <BackDrop onClick={OpenMenu} /> : null}
    </>
  );
};
