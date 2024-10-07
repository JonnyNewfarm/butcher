export const revalidate = 0;
import getProducts, { IProductParams } from "@/actions/getProducts";
import ProductCard from "@/app/components/products/productCard";
import Container from "../components/Container";
import NullData from "../components/nullData";

interface HomeProps {
  searchParams: IProductParams;
}

const ProductsPage = async ({ searchParams }: HomeProps) => {
  const products = await getProducts(searchParams);
  if (products.length == 0) {
    return <NullData title="Oops! No products found." />;
  }

  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-8">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
