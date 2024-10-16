import getProductByBrand from "@/actions/getProductByBrand";
import Container from "./components/Container";
import Brands from "./components/home/Brands";
import HeroSection from "./components/home/HeroSection";
import ProductCard from "@/app/components/products/productCard";

export default async function Home() {
  const products = await getProductByBrand();
  return (
    <Container>
      <div className="justify-center flex">
        <HeroSection />
      </div>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-8">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </div>

      <div className="mt-20">
        <Brands />
      </div>
    </Container>
  );
}
