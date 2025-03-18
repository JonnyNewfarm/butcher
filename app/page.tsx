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
import HeroSection from "./components/home/HeroSection";
import HeroContainer from "./components/home/HeroContainer";

export default async function Home() {
  const products = await getProductByBrand();

  return (
    <ScrollSection>
      <HeroContainer />

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
