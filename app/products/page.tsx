export const revalidate = 0;
import getProducts, { IProductParams } from "@/actions/getProducts";
import ProductCard from "@/app/components/products/productCard";
import Container from "../components/Container";
import NullData from "../components/nullData";
import FilterProducts from "../components/products/FilterProducts";
import { ProductType } from "../components/products/ProductDetails";
import FilterPrice from "../components/products/FilterPrice";
import FilterProductsMenu from "../components/products/FilterProductsMenu";

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
      <div className="flex flex-row">
        <div className="mt-20 sticky z-10 mr-10 border-black border-r-[0.5px] ">
          <FilterProductsMenu />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-20">
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
    </Container>
  );
};

export default ProductsPage;
