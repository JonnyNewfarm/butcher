import getProductByBrand from "@/actions/getProductByBrand";
import Container from "./components/Container";

import ProductsCard from "@/app/components/products/ProductsCard";
import CategorySection from "./components/home/CategorySection";

import ImageSliderSection from "./components/home/ImageSliderSection";
import NewsLetter from "./components/home/NewsLetter";
import Link from "next/link";
import ImageCollection from "./components/home/ImageCollection";

export default async function Home() {
  const products = await getProductByBrand();

  return (
    <>
      <div className="w-full h-screen sm:bg-[url('/small-hero.jpg')] bg-[url('/mobilehero2.jpg')] md:bg-[url('/medium-hero.jpg')] lg:bg-[url('/coolbg.jpg')] bg-cover">
        <div className="w-full flex justify-center sm:justify-start lg:ml-52 md:ml-28 sm:ml-20 h-full align-middle sm:items-center">
          <div className="mt-[35px] [@media(min-width:374px)]:mt-[20px] [@media(min-width:389px)]:mt-[65px]">
            <h1 className="font-extrabold text-3xl ml-1 -mb-3">By </h1>
            <h1 className="text-8xl  font-[900]">Dormo</h1>
            <div className="h-[2px] w-full bg-black" />

            <h1 className="font-extrabold text-7xl mb-4 ml-1">New in</h1>
            <Link
              href={"/products?brand=Dormo"}
              className="border-[2px] [@media(min-width:374px)]:py-2 [@media(min-width:389px)]:py-3  max-w-36 text-center text-nowrap border-black py-3 px-5 font-semibold text-lg mt-6 bg-stone-900 text-white rounded-xl hover:bg-slate-900/90"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>

      <Container>
        <div className="py-5 border-t-[1px] bg-custom-color w-full rounded-xl">
          <h1 className="font-semibold text-xl">By Dormo</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 p-6 rounded-xl lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-6  w-full">
            {products.map((product: any) => {
              return <ProductsCard key={product.id} data={product} />;
            })}
          </div>
        </div>
      </Container>
      <div className="w-full flex flex-col ">
        <CategorySection />

        <div className="flex flex-col bg-gradient-to-r from-[#eaeae8] to-[#d8d8d6] lg:flex-row md:justify-between md:items-center">
          <ImageSliderSection />
          <ImageCollection />
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
