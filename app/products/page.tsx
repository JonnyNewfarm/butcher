import getProducts, { IProductParams } from "@/actions/getProducts";
import ProductCard from "@/app/components/products/productCard";
import Container from "../components/Container";
interface HomeProps {
  searchParams: IProductParams;
}
const ProductsPage = async ({ searchParams }: HomeProps) => {
  const products = await getProducts(searchParams);

  return (
    <>
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-8">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default ProductsPage;
