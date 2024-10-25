import React from "react";
import Container from "../Container";
import Link from "next/link";
import CartCounter from "./CartCounter";
import NavMenu from "./NavMenu";
import { getLoggedInUser } from "@/actions/getLoggedInUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import { CiHome } from "react-icons/ci";
import HeroSection from "../home/HeroSection";
import { IProductParams } from "@/actions/getProducts";

const NavBar = async () => {
  const currentUser = await getLoggedInUser();

  return (
    <div className="sticky top-0 z-30 bg-custom-color-light text-stone-800">
      <div className="py-3  h-14 align-middle">
        <Container>
          <div className="flex  items-center justify-between gap text-black-3 md:gap-0">
            <Link
              href="/"
              className="font-extrabold text-2xl ml-10  text-stone-800"
            >
              Shades
            </Link>

            <div className="flex text-slate-800 items-center gap-8 md:gap-10">
              <SearchBar />
              <Link href={"/"}>
                <CiHome strokeWidth={0.5} size={26} />
              </Link>
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
