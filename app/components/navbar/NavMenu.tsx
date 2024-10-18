"use client";
import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import Link from "next/link";
import { MenuItem } from "@mui/material";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { User } from "@prisma/client";
import { safeUser } from "@/types";
import { CiUser } from "react-icons/ci";

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
      <div className="relative z-30">
        <div onClick={OpenMenu}>
          <CiUser cursor={"pointer"} strokeWidth={"0.5px"} size={25} />

          {isOpen && (
            <div
              className="absolute
            rounded-md
            shadow-lg
            w-[170px]
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            flex
            flex-col
            cursor-pointer

            
            "
            >
              {currentUser ? (
                <div>
                  <Link href={"/orders"}>
                    <MenuItem onClick={OpenMenu}>Your orders</MenuItem>
                  </Link>
                  <hr />
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
                <div>
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

export default NavMenu;
