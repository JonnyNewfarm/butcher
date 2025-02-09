import getProductByBrand from "@/actions/getProductByBrand";
import Container from "./components/Container";

import ProductsCard from "@/app/components/products/ProductsCard";
import CategorySection from "./components/home/CategorySection";
import ImageSlider from "./components/home/ImageSlider";

import sunglassesOnBeach from "@/public/sunglassesOnBeach.png";
import sunglassesOnTowel from "@/public/sunglassesOnTowel.png";
import sunglassesOnTable from "@/public/sunglassesOnTable.png";
import ImageSliderSection from "./components/home/ImageSliderSection";
import NewsLetter from "./components/home/NewsLetter";
import Link from "next/link";

const imageSlides = [sunglassesOnBeach, sunglassesOnTable, sunglassesOnTowel];

export default async function Home() {
  const products = await getProductByBrand();

  return (
    <>
      <div className="w-full h-screen sm:bg-[url('/small-hero.jpg')] bg-[url('/mobilehero2.jpg')] md:bg-[url('/medium-hero.jpg')] lg:bg-[url('/coolbg.jpg')] bg-cover">
        <div className="w-full flex justify-center sm:justify-start lg:ml-52 md:ml-28 sm:ml-20 h-full align-middle sm:items-center">
          <div className="mt-20">
            <h1 className="font-bold text-3xl ml-1">By </h1>
            <h1 className="text-8xl font-bold">Dormo</h1>
            <div className="h-[2px] w-full bg-black" />

            <h1 className="font-extrabold text-7xl mb-5 ml-1">New in</h1>
            <Link
              href={""}
              className="border-[2px] hidden sm:block max-w-36 text-center text-nowrap border-black py-3 px-5 font-semibold text-lg mt-6 bg-stone-900 text-white rounded-xl hover:bg-slate-900/90"
            >
              Shop now
            </Link>
          </div>
        </div>
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

        <div className="flex flex-col-reverse md:flex-row justify-center md:items-center bg-[#e4e4e1]  pb-20 sm:px-10 sm:py-8 md:py-20">
          <ImageSliderSection />

          <ImageSlider imageUrls={imageSlides!} />
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
