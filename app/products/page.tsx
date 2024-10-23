export const revalidate = 0;
import getProducts, { IProductParams } from "@/actions/getProducts";
import ProductCard from "@/app/components/products/productCard";
import Container from "../components/Container";
import NullData from "../components/nullData";
import FilterProducts from "../components/products/FilterProducts";
import { ProductType } from "../components/products/ProductDetails";
import FilterPrice from "../components/products/FilterPrice";
import FilterProductsMenu from "../components/products/FilterProductsMenu";
import { Span } from "next/dist/trace";

interface HomeProps {
  searchParams: IProductParams;
}

const ProductsPage = async ({ searchParams }: HomeProps) => {
  const products = await getProducts(searchParams);

  if (products.length == 0) {
    return <NullData title="Oops! No products found." />;
  }

  return (
    <Container>
      <div
        style={{ borderRadius: "30px" }}
        className="flex w-full bg-stone-600 shadow-sm opacity-90 mt-6 h-7 justify-center"
      >
        <h1 className="bg text-stone-50 font-semibold ">Etiam aliquam quam</h1>
      </div>
      <div className="flex flex-row mt-8">
        <div className="sticky z-10 border-stone-400 border-r-[0.5px] ">
          <FilterProductsMenu />
        </div>
        <div className="">
          {!searchParams.brand ? (
            <span className="pl-3 font-semibold">{searchParams.category}</span>
          ) : (
            <span className="pl-3 font-semibold">{searchParams.brand}</span>
          )}
          <div className="grid grid-cols-2 shadow-inner shadow-stone-300 scroll h-full border-t-[1px] px-6 border-stone-400 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {products
              .sort((a, b) => {
                if (searchParams.price === "high") {
                  return (a.price! - b.price!) as any;
                }
                if (searchParams.price === "Low") {
                  return (b.price! - a.price!) as any;
                }
                if (searchParams.price === "") {
                  return products;
                }
              })
              .map((product: any) => {
                return <ProductCard key={product.id} data={product} />;
              })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
