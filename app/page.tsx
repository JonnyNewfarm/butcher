"use server";
import getProductByBrand from "@/actions/getProductByBrand";
import Container from "./components/Container";

import CategorySection from "./components/home/CategorySection";

import ImageSliderSection from "./components/home/ImageSliderSection";
import NewsLetter from "./components/home/NewsLetter";
import Link from "next/link";
import ImageCollection from "./components/home/ImageCollection";
import ScrollSection from "./components/ScrollSection";
import ProductCardContainer from "./components/home/ProductCardContainer";
import ImgParallax from "./components/home/ImgParallax";
import ParallaxContainer from "./components/home/ParallaxContainer";

export default async function Home() {
  const products = await getProductByBrand();

  return (
    <ScrollSection>
      <div className="w-full h-screen sm:bg-[url('/small-hero.jpg')] bg-[url('/mobilehero2.jpg')] md:bg-[url('/medium-hero.jpg')] lg:bg-[url('/coolbg.jpg')] bg-cover">
        <div className="w-full flex justify-center sm:justify-start lg:ml-52 md:ml-28 sm:ml-20 h-full align-middle sm:items-center">
          <div className="mt-[35px] [@media(min-width:374px)]:mt-[20px] [@media(min-width:389px)]:mt-[65px]">
            <h1 className="font-extrabold text-3xl ml-1 -mb-3">By </h1>
            <h1 className="text-8xl  font-extrabold">Dormo</h1>
            <div className="h-[2px] w-full bg-black" />

            <h1 className="font-extrabold text-7xl mb-4 ml-1">New in</h1>
            <Link
              href={"/products?brand=Dormo"}
              className="border-[2px] [@media(min-width:374px)]:py-2 [@media(min-width:389px)]:py-3  max-w-36 text-center text-nowrap border-black py-3 px-5 font-semibold text-lg mt-6 bg-stone-900 text-white rounded-lg hover:bg-slate-900/90"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>

      <Container>
        <ProductCardContainer products={products} />
      </Container>

      <ParallaxContainer />
      <CategorySection />

      <div className="flex flex-col bg-gradient-to-r from-[#eaeae8] to-[#d8d8d6] lg:flex-row md:justify-between md:items-center">
        <ImageSliderSection />
        <ImageCollection />
      </div>

      <NewsLetter />
    </ScrollSection>
  );
}
