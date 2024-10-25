import getProductByBrand from "@/actions/getProductByBrand";
import Container from "./components/Container";
import Brands from "./components/home/Brands";
import HeroSection from "./components/home/HeroSection";
import ProductCard from "@/app/components/products/productCard";

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
          <div className="grid grid-cols-2 sm:grid-cols-3 p-6 rounded-xl lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-8 mt-3 w-full">
            {products.map((product: any) => {
              return <ProductCard key={product.id} data={product} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
