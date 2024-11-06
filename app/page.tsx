import getProductByBrand from "@/actions/getProductByBrand";
import Container from "./components/Container";
import Brands from "./components/home/Brands";
import HeroSection from "./components/home/HeroSection";
import ProductCard from "@/app/components/products/productCard";
import CategorySection from "./components/home/CategorySection";
import ImageSlider from "./components/home/ImageSlider";

import sunglassesOnBeach from "@/public/sunglassesOnBeach.png";
import sunglassesOnTowel from "@/public/sunglassesOnTowel.png";
import sunglassesOnTable from "@/public/sunglassesOnTable.png";
import ImageSliderSection from "./components/home/ImageSliderSection";

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
          <h1 className="font-semibold">Dormo</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 p-6 rounded-xl lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-6  w-full">
            {products.map((product: any) => {
              return <ProductCard key={product.id} data={product} />;
            })}
          </div>
        </div>
      </Container>
      <div className="mt-24 w-full">
        <CategorySection />
      </div>
      <div className="flex flex-col md:flex-row md:justify-center bg-custom-color-light mt-[-180px] xl:mt-[-150px] md:mt-[-127px] py-20 md:px-10 px-5">
        <div className="md:mt-10">
          <ImageSliderSection />
        </div>
        <div className="md:w-[40%] mt-[-160px] md:mt-10 lg:w-[35%] xl:w-[30%]">
          <ImageSlider imageUrls={imageSlides!} />
        </div>
      </div>
    </>
  );
}
