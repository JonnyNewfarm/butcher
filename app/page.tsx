import { products } from "@/utils/products";
import Container from "./components/Container";

import ProductCard from "./components/products/productCard";
import getProducts, { IProductParams } from "@/actions/getProducts";

interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);
  return (
    <Container>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-8">
        {products.map((product: any) => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </div>
    </Container>
  );
}
