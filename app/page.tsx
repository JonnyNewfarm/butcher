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
import ScrollText from "./components/home/ScrollText";

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

      <NewsLetter />
    </ScrollSection>
  );
}
