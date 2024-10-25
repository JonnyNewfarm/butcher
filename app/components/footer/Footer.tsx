"use client";
import React from "react";
import Container from "../Container";
import Footerlist from "./Footerlist";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-stone-700 text-sm mt-16 text-slate-200">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <Footerlist>
            <h3 className="font-bold">Categories</h3>
            <Link href="#">Men</Link>
            <Link href="#">Women</Link>
            <Link href="#">Sport</Link>
            <Link href="#">Vintage</Link>
            <Link href="#">Designer</Link>
          </Footerlist>
          <Footerlist>
            <h3 className="font-bold">Costumer service</h3>
            <Link href="#">Contact us</Link>
            <Link href="#">shipping policy</Link>
            <Link href="#">Returns</Link>
            <Link href="#">FAQs</Link>
          </Footerlist>
          <div className="w-full md:w-1/3 mb-6  md:mb-0">
            <h3 className="font-bold">About us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              saepe aut id odio ipsam facere quae, rerum animi maxime eaque,
              laudantium incidunt earum iure, deserunt est expedita nulla harum
              vel.
            </p>
            <p>&copy; {new Date().getFullYear()} Shades. All rights reserved</p>
          </div>
          <Footerlist>
            <h3 className="font-bold">Follow Shades at</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </Footerlist>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
