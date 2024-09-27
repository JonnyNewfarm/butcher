import React from "react";
import Container from "../Container";
import Link from "next/link";
import CartCounter from "./CartCounter";
import NavMenu from "./NavMenu";
import { getLoggedInUser } from "@/actions/getLoggedInUser";
import Categories from "./Categories";

const NavBar = async () => {
  const currentUser = await getLoggedInUser();

  return (
    <div className="sticky top-0 w-full bg-custom-color z-30 shadow-sm text-black">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap text-black-3 md:gap-0">
            <Link href="/" className="font-bold text-xl">
              Shades
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-10">
              <CartCounter />
              <NavMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default NavBar;
