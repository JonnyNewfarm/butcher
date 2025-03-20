import Link from "next/link";
import React from "react";

import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      className=" text-white relative h-[420px]    bg-stone-700"
    >
      <div className="relative  h-[calc(100vh+420px)] -top-[100vh] bg-stone-700   flex-col justify-start">
        <div className="h-[420px] p-14 sticky top-[calc(100vh-420px)]">
          <div className="flex flex-row gap-x-11 text-xl">
            <div className="flex flex-col">
              <h1 className="text-2xl text-white/60 mb-3">Men</h1>
              <Link href={"products?gender=Men&category=Vintage"}>Vintage</Link>
              <Link href={"products?gender=Men&category=Sport"}>Sport</Link>
              <Link href={"products?gender=Men&category=Designer"}>
                Designer
              </Link>
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl text-white/60 mb-3">Women</h1>
              <Link href={"products?gender=Women&category=Vintage"}>
                Vintage
              </Link>
              <Link href={"products?gender=Women&category=Sport"}>Sport</Link>
              <Link href={"products?gender=Women&category=Designer"}>
                Designer
              </Link>
            </div>
          </div>

          <div className="mt-10 mb-10 text-left">
            <h1 className="text-6xl lg:text-9xl  font-bold">Lunnettes</h1>
            <h1>Created by - Jonny Newfarm</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
