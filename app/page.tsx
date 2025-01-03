import getProductByBrand from "@/actions/getProductByBrand";
import Container from "./components/Container";

import HeroSection from "./components/home/HeroSection";
import ProductsCard from "@/app/components/products/ProductsCard";
import CategorySection from "./components/home/CategorySection";
import ImageSlider from "./components/home/ImageSlider";

import sunglassesOnBeach from "@/public/sunglassesOnBeach.png";
import sunglassesOnTowel from "@/public/sunglassesOnTowel.png";
import sunglassesOnTable from "@/public/sunglassesOnTable.png";
import ImageSliderSection from "./components/home/ImageSliderSection";
import NewsLetter from "./components/home/NewsLetter";

const imageSlides = [sunglassesOnBeach, sunglassesOnTable, sunglassesOnTowel];

export default async function Home() {
  const products = await getProductByBrand();

  return (
    <>
      <div className="justify-center flex bg-custom-color-light w-full">
        <HeroSection />
      </div>

      <Container>
        <div className="mt-24 border-t-[1px] bg-custom-color w-full rounded-xl">
          <h1 className="font-semibold text-xl">By Dormo</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 p-6 rounded-xl lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-6  w-full">
            {products.map((product: any) => {
              return <ProductsCard key={product.id} data={product} />;
            })}
          </div>
        </div>
      </Container>
      <div className="mt-24 w-full flex flex-col bg-custom-color-light">
        <CategorySection />

        <div className="flex flex-col-reverse md:flex-row justify-center md:items-center bg-custom-color-light pb-20 sm:px-10 sm:py-8 md:py-20">
          <ImageSliderSection />

          <ImageSlider imageUrls={imageSlides!} />
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
